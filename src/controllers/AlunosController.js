const { validationResult } = require('express-validator');
const { Aluno } = ('../models');

module.exports = {
  create: (req, res) => {
    return res.render('cadastrar-alunos');
  },
  store: async (req, res) => {
    const {nome, sobrenome, matricula, email, telefone, data_nascimento, altura, peso} = req.body;
    const resultado = await Aluno.create({
      nome, 
      sobrenome, 
      matricula, 
      email, 
      telefone, 
      data_nascimento, 
      altura, 
      peso
    });
    console.log(resultado);
    res.redirect('aluno');
  },
  read: async (req, res) => {
    console.log(Aluno);
    const aulas = await Aluno.findAll();
    return res.render('alunos', {alunos});
  }
}
