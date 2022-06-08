var express = require('express');
//const AulaController = require('../controllers/AulaController');
var router = express.Router();

router.get('/', MohaveController.index);

module.exports = router;





