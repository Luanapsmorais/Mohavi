<<<<<<< HEAD
const alunosServices = require('../services/alunosServices')

const alunosContoller  = {
    create: async (req, res) => {
        const {
        nome, email, tel, senha
        } = req.body

        const response = await alunosServices.create(nome, email, tel, senha)

        res.json(response)
    },
}

module.exports = alunosContoller;
=======
const AlunoModel = require('../models/AlunoModel');

const AlunosController = {
    form: (req, res) => {
        return res.render('cadastroAluno');
    },
}

module.exports = AlunosController;
>>>>>>> develop
