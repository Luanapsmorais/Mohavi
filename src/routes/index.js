var express = require('express');
const AulasController = require('../controllers/AulasController');
var router = express.Router();

router.get('/', AulasController.index);

module.exports = router;
