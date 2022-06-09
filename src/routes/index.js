var express = require('express');
const AulasController = require('../controllers/AulasController');
var router = express.Router();

router.get('/', (req, res)=> res.render("index"));

module.exports = router;
