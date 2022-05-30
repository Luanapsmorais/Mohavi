const AulaModel = require('../models/AulaModel')

module.exports = {
    index: (req, res) => {
    const Aulas = AulaModel.index();
    return res.render('aulas', { Aula });
    },

    admin: (req, res) => {
        const aulas = AulaModel.index();
        return res.render('admin-aulas', { aulas });
        },

    editar: (req, res) => {
        const { id } = req.params;
        let aula = null
        if(id){
        aula = AulaModel.buscar(id)
        } 
        return res.render('cadastro-edicao'), { Aulas };
    },

    criar: (req, res) => {
        const { body, file } = req;
        AulaModel.criar(body, file);
        return res.redirect('/aulas/admin');
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        AulaModel.atualizar(id, req.body);
        return res.redirect('/aulas/admin');
    },

    deletar: (req, res) => {
        const { id } = req.params;
        AulaModel.deletar (id);
        return res.redirect('/aulas/admin')
    }
};