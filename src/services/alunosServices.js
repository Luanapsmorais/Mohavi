const alunosRepository = require('../repositories/alunosRepository')

const alunosService  = {
    create: async (nome, email, tel, senha) => {
        

        const alunoCreate = await alunosRepository.create(nome, email, tel, senha)

        return alunoCreate;
    },
}

module.exports = alunosService;