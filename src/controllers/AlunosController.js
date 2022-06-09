const AlunoModel = {};

module.exports = {
    index: (req, res) => {
    const Aluno = AlunoModel.index();
    return res.render('alunos', { Aluno });
    },
    create: (req, res) => {
      return res.render('cadastrar-alunos');
    },
    store: async (req, res) => {
      const {nome, valor, descricao, turno} = req.body;
      const resultado = await AlunoModel.create({
        nome, 
        valor, 
        descricao, 
        turno
      });
      console.log(resultado);
      res.redirect('alunos');
    },
    read: (req, res) => {
      const alunos = AlunoModel.findAll();
      return res.render('cadastrar-alunos', {alunos});
    }
}
