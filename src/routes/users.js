var express = require('express');
var router = express.Router();

const AlunosController = require('../controllers/AlunosController');

router.get('/cadastro', AlunosController.form);

//router.post('/cadastro', AlunoController.criar);

module.exports = router;



