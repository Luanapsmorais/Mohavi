const AulaModel = require('../models/AulaModel')

module.exports = {
    index: (req, res) => {
    const aulas = AulaModel.index();
    return res.render('servicos', { servicos });
    },

    admin: (req, res) => {
        const servicos = AulaModel.index();
        return res.render('admin-servicos', { servicos });
        },

    editar: (req, res) => {
        const { id } = req.params;
        let servico = null
        if(id){
        servico = AulaModel.buscar(id)
        } 
        return res.render('cadastro-edicao'), { servico };
    },

    criar: (req, res) => {
        const { body, file } = req;
        AulaModel.criar(body, file);
        return res.redirect('/servicos/admin');
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        AulaModel.atualizar(id, req.body);
        return res.redirect('/servicos/admin');
    },

    deletar: (req, res) => {
        const { id } = req.params;
        AulaModel.deletar (id);
        return res.redirect('/servicos/admin')
    }
};