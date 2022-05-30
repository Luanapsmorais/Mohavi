const AlunoModel = require('../models/AlunoModel');

const AlunosController = {
    form: (req, res) => {
        return res.render('cadastroAluno');
    },
}

module.exports = AlunosController;
