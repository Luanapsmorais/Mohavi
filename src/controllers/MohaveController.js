const ServicoModel = require('../models/ServicoModel');

module.exports = {
    index: (req, res) => {
        const servicos = ServicoModel.index();
        return res.render('index', { servicos });
    },

    cadastro: (req, res) => {
        let servico
        if (req.params.id){
         servico = ServicoModel.index();
        }
        return res.render('admin-cadastro', { servico });
    }
};



