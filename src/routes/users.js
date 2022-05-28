
var express = require('express');
var router = express.Router();

const AlunoController = require('../controllers/alunoController');

router.get('/cadastro', AlunoController.form);

//router.post('/cadastro', AlunoController.criar);

module.exports = router;



