const AulaModel = require('../models/AulaModel');

module.exports = {
    index: (req, res) => {
        const aulas = AulaModel.index();
        return res.render('index', { aulas });
    },

    cadastro: (req, res) => {
        let aula
        if (req.params.id){
         servico = AulaModel.index();
        }
        return res.render('admin-cadastro', { aula });
    }
};



