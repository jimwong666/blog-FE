const express = require('express');
const router = express.Router();

const backend = require('../../backend');
const Session = require('../../session');

const logger = require('../../logger');

router.get('/', function(req, res, next) {
	logger.getLogger().info("γη»εΊγ" + Session.get(req, res).userIdEnc);
	Session.destroy(req, res);

	res.redirect('login');
});

module.exports = router;
