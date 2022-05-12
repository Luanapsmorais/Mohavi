const models = require('../models')

const alunosRepository  = {
    create: async (nome, email, tel, senha) => {
        

        const create = await models.Aluno.create(nome, email, tel, senha, 1)

        return alunoCreate;
    },
}

module.exports = alunosRepository;