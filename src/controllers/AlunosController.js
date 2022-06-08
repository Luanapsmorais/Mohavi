const AlunoModel = require('../models_antigo/sequelize/AlunoModel');

const AlunosController = {
    form: (req, res) => {
        return res.render('cadastroAluno');
    },
}

module.exports = AlunosController;
