
var express = require('express');
var router = express.Router();

const UsuarioController = require('../controllers/usuarioController');

router.get('/cadastro', UsuarioController.form);

//router.post('/cadastro', UsuarioController.criar);

module.exports = router;



