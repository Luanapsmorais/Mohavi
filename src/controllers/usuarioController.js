const AlunoModel = require('../models/AlunoModel');

const AlunoController = {
    form: (req, res) => {
        return res.render('cadastroAluno');
    },
}

module.exports = AlunoController;
