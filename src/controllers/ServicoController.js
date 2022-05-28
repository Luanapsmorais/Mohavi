const ServicoModel = require('../models/ServicoModel');
const { validationResult } = require('express-validator');
const AulasModel = require('../models/AulaModel')

module.exports = {
    index: (req, res) => {
    const Aulas = AulasModel.index();
    return res.render('aulas', { Aulas });
    },

    admin: (req, res) => {
        const aulas = AulasModel.index();
        return res.render('admin-aulas', { aulas });
        },

    editar: (req, res) => {
        const { id } = req.params;
        let servico = null

        const erros = validationResult(req).errors;
        
        if(id){
        aula = AulasModel.buscar(id)
        } 
        return res.render('cadastro-edicao'), { erros, servico };
    },

    criar: (req, res) => {
        const { body, file } = req;
        const erros = validationResult(req).errors;
    
        if (!erros.length) {
          ServicoModel.criar(body, file);
          return res.redirect('/servicos/admin');
        }
    
        return res.render('cadastro-edicao', { erros, servico: null })
      },

      atualizar: (req, res) => {
        const { id } = req.params;
    
        const erros = validationResult(req).errors;
    
        if (!erros.length) {
          ServicoModel.atualizar(id, req.body);
          return res.redirect('/servicos/admin');
        }
    
        const servico = { id, ...req.body };
    
        return res.render('cadastro-edicao', { erros, servico })
      },

    deletar: (req, res) => {
        const { id } = req.params;
        AulasModel.deletar (id);
        return res.redirect('/aulas/admin')
    }
};