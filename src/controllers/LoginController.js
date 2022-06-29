const AulaModel = require('../models/AulaModel');

const LoginController = {
    index: (req, res) => {
        res.render('login', { erros: null, sucess: null});
    }
}
module.exports = LoginController;
