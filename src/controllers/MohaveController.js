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

//to do:
//criar um AlunosController( aqui nesse aluno controller colocar as funções efetivamnte que deverão ser puxadas no banco de dados, ver a aula do bruno disso )

