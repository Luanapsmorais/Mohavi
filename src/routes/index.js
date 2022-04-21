var express = require('express');
const MohaveController = require('../controllers/MohaveController');
var router = express.Router();

router.get('/', MohaveController.index);

module.exports = router;





