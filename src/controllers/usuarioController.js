const UsuarioModel = require('../models/UsuarioModel');

const UsuarioController = {
    form: (req, res) => {
        return res.render('cadastroAluno');
    }
}

module.exports = UsuarioController;
