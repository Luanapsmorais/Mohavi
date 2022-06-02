var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('area-aluno', { title: 'Área do Aluno' });
  });
  
  module.exports = router;