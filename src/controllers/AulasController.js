const { validationResult } = require('express-validator');
const AulaModel = require('../models/AulaModel');

module.exports = {
    index: (req, res) => {
    const Aula = AulaModel.index();
    return res.render('aulas', { Aula });
    },

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
    }
};