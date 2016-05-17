var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/lalaland', function(req, res) {
	res.send('Path: /lalaland');
};

router.get('/sodacity', function(req, res) {
	res.send('Path: /sodacity');
};

router.get('/cokecanacola', function(req, res) {
	res.send('Path: /cokecanacola');
};

module.exports = router;
