/**
 *
 * 判断链接是否通过Token校验
 */

const Session = require('../session');
const Constants = require('../constants');
const tools = require('../utils/tools');

module.exports = {
    filter: function (req, res, next) {
        const notMatchWhitelist = !tools.MatchSome(req.url, Constants.CSRF_WHITE_LIST);
        const session =  Session.get(req, res);
        const xToken = req.header('x-token') || req.body['x-token'] || req.query['x-token'];

        if(notMatchWhitelist && !(req.method === 'GET') && !(xToken && decodeURIComponent(xToken) === session.xToken)){ // 没有匹配白名单 并且 请求不是get 并且 xToken不存在或有误
            res.send({
                retCode: '-1',
                retMsg: '非法操作！'
            });
        }else{
            next();
        }

    }
};