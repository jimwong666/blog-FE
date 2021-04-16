/**
 * @author qiumingsheng
 * 判断链接是否需要登录
 */

const Session = require('../session');
const Constants = require('../constants');
const tools = require('../utils/tools');
const logger = require('../logger');

// 已登录，访问 /login，直接到首页
const loginUrlReg = /^\/(login)/;

module.exports = {
    filter: function (req, res, next) {
        const notMatchWhitelist = !tools.MatchSome(req.url, Constants.WHITE_LIST);
        const session = Session.get(req, res);
        const ajax = req.body.ajax;
        const logined = session && session.userIdEnc;
        const host =  req.headers.host;

        if(host.indexOf(res.locals.app.configDomainUrl) == -1){
            logger.getLogger().error('Request failed: "' + req.url + '"', '\n', "Forbidden");
            res.status(403);
            res.render('error', {
                error: "拒绝访问！"
            });
        }

        if(logined){
            if(loginUrlReg.test(req.url)){
                res.redirect('/');
            } else {
                next();
            }
        } else {
            if(notMatchWhitelist){
                if (ajax) {
                    const json = {
                        timeOutUrl: '/login?from='+encodeURIComponent(req.body.pathName)
                    };
                    res.send(JSON.stringify(json));
                } else {
                    let fromPos = req.url.indexOf('?');
                    if(fromPos === -1){
                        res.redirect('/login?from=' + encodeURIComponent(req.url));
                    } else {
                        res.redirect('/login?from=' + encodeURIComponent(req.url.slice(0, fromPos)) + '&'+ req.url.slice(fromPos + 1));
                    }
                }
            } else {
                next();
            }
        }
    }
};