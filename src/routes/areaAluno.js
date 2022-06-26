var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth')

router.get('/', auth, function(req, res, next) {


    res.render('area-aluno', { title: 'Área do Aluno' });
  });

  
  
  module.exports = router;