const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.send({
		a: 777,
		b: 888,
	});
});

module.exports = router;
