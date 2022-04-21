var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('areaAluno', { title: 'Área do Aluno' });
  });
  
  module.exports = router;