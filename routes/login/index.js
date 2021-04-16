const express = require('express');
const router = express.Router();

const backend = require('../../lib/backend');
const Session = require('../../lib/session');

const logger = require('../../lib/logger');

router.get('/', function(req, res, next) {
	let params = {
		userName: "",
        password: "",
		error: ""
	};
	
	res.render('login', {
		form: params
	});
});

router.post('/', function(req, res, next) {
	let params = {
		userName: req.body.userName,
        password: req.body.password
	};
	
	backend.post('/login', params, req, res, function(data){
		logger.getLogger().info('【BACKEND】登录 | POST | req.body.logonUserName | req.realIp | /web/login | ' + JSON.stringify(data));

		if(data && data.retCode == 0){
			console.log(Session.get);
            Session.logon(req, res, data);
            res.redirect('/');
        }else{
            params.error = data.error;
            res.render('login', {
                form: params
            });
        }
	})
});

module.exports = router;
