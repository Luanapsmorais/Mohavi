const AulaModel = require('../models/AulaModel');

module.exports = {
    index: (req, res) => {
        const servicos = AulaModel.index();
        return res.render('index', { servicos });
    },

    cadastro: (req, res) => {
        let servico
        if (req.params.id){
         servico = AulaModel.index();
        }
        return res.render('admin-cadastro', { servico });
    }
};

