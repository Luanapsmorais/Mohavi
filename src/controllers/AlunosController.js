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

module.exports = AlunosContoller;
