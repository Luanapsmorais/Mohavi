const { Aluno } = require('../models')
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");
const { Usuario, Review } = require('../models');
const { validationResult } = require('express-validator');
const { v4: uuid_v4 } = require('uuid');

module.exports = {

  // Abre a pagina de Cadastro
  create: (req, res) => {
    return res.render('cadastroAluno', { erros: null});
  },

  async read (req, res) {
    console.log(Aluno);
    const alunos = await Aluno.findAll();
    return res.render('alunos', { alunos });
  },

  // Cadastro de Aluno

  async store (req, res) {
    try{
      const {
        nome,
        sobrenome,
        dataNasc,
        altura,
        peso,
        email,
        telefone,
        senha,
        confirmarSenha
      } = req.body;

      const erros = [];
      const sucess = [];

      const verificarAluno = await (Aluno.findOne({
        where: {
          email: email
        }
      }))

      if (verificarAluno) {
        erros.push({ msg: 'Aluno já cadastrado!' });
        return res.render('cadastroAluno', { erros });
      }

      if (senha === confirmarSenha) {
        const aluno = await Aluno.create({
          matricula: uuid_v4(),
          nome,
          sobrenome,
          data_nascimento: dataNasc,
          altura,
          peso,
          email,
          telefone,
          senha: bcrypt.hashSync(senha, 12),
        })

        console.log(aluno)

        sucess.push({ msg: 'Aluno criado com sucesso!' });

        return res.render('login', { erros: null, sucess });

      } else {
        erros.push({ msg: 'As senhas não conferem!' });
        return res.render('cadastroAluno', { erros });
      }
    } catch(err){
      console.log(err)
    }
  },
  
  async autenticar(req, res) {
    try {
      const requestUser = req.body;
      const erros = [];

      if (!requestUser) {
        erros.push({ msg: 'Login ou senha inválidos' });
        return res.render('login', { erros });
      }

      const aluno = await Aluno.findOne({
        attributes: ['id', 'matricula', 'nome', 'sobrenome', 'data_nascimento', 'peso', 'altura', 'email', 'telefone', 'senha', ],
        where: {
          email: requestUser.email
        }
      });

      if (!aluno) {
        erros.push({ msg: 'Aluno não cadastrado!' });
        return res.render('login', { erros });
      }

      const senhasIguais = bcrypt.compareSync(requestUser.senha, aluno.senha);

      if (!senhasIguais) {
        erros.push({ msg: 'Login ou senha inválidos' });
        return res.render('login', { erros });
      }


      req.session.aluno = aluno;
      console.log(aluno)

      return res.render('area-aluno', {aluno});

    } catch (erro) {
      console.log(erro);
    }
  }
}
