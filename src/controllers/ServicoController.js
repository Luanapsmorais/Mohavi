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
        let aula = null
        if(id){
        aula = AulasModel.buscar(id)
        } 
        return res.render('cadastro-edicao'), { aula };
    },

    criar: (req, res) => {
        const { body, file } = req;
        AulasModel.criar(body, file);
        return res.redirect('/aulas/admin');
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        AulasModel.atualizar(id, req.body);
        return res.redirect('/aulas/admin');
    },

    deletar: (req, res) => {
        const { id } = req.params;
        AulasModel.deletar (id);
        return res.redirect('/aulas/admin')
    }
};