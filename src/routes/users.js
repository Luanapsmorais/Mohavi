
var express = require('express');
var router = express.Router();

const UsuarioController = require('../controllers/usuarioController');
const AlunosController = require('../controllers/AlunosController')

router.get('/cadastro', AlunosController.form);

//router.post('/cadastro', UsuarioController.criar);
//router.post('/cadastro', AlunosController.store)

module.exports = router;



