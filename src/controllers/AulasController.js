const { validationResult } = require('express-validator');
const { Aula, Turno } = require('../models');

module.exports = {
    create: (req, res) => {
      return res.render('cadastrar-aulas');
    },
    store: async (req, res) => {
      const {nome, valor, descricao, turno} = req.body;
      const data = await Aula.create({
        nome, 
        valor, 
        descricao, 
        turno
      });
      console.log(data);
      res.redirect('aulas');
    },
    read: async (req, res) => {
      console.log(Aula);
      const aulas = await Aula.findAll({
        include:{
          model: Turno,
          as: 'turno',
          require: true
        }
      });
      return res.render('aulas', {aulas});
    },
    edit: async (req, res)=>{
      const {id} = req.params;
      const aula = await Aula.findByPk(id);
      return res.render('editar-aula', {aula})
    },
    update: async (req, res)=>{
      const {nome, valor, descricao, turno} = req.body;
      const resultado = await Aula.update({
        nome,
        valor,
        descricao,
        turno
      },
      {
        where:{ id }
      })
      return res.redirect('aulas')
    },
    delete: async (req, res)=>{
      const { id } = req.params;
      await Aula.destroy({
        where: { id }
      })
      return res.redirect('aulas')
    }
}




/*
    admin: (req, res) => {
        const aulas = AulaModel.index();
        return res.render('admin-aulas', { aulas });
        },

    editar: (req, res) => {
        const { id } = req.params;
        let aula = null

        const erros = validationResult(req).errors;
        
        if(id){
        aula = AulaModel.buscar(id)
        } 
        return res.render('cadastro-edicao'), { erros, aula };
    },

    criar: (req, res) => {
        const { body, file } = req;
        const erros = validationResult(req).errors;
    
        if (!erros.length) {
          AulaModel.criar(body, file);
          return res.redirect('/aulas/admin');
        }
    
        return res.render('cadastro-edicao', { erros, aula: null })
      },

      atualizar: (req, res) => {
        const { id } = req.params;
    
        const erros = validationResult(req).errors;
    
        if (!erros.length) {
          AulaModel.atualizar(id, req.body);
          return res.redirect('/aulas/admin');
        }
    
        const aula = { id, ...req.body };
    
        return res.render('cadastro-edicao', { erros, aula })
      },

    deletar: (req, res) => {
        const { id } = req.params;
        AulaModel.deletar (id);
        return res.redirect('/aulas/admin')
    }*/