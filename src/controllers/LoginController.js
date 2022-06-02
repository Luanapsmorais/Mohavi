const AulaModel = require('../models/AulaModel');

const LoginController = {
    index: (req, res) => {
        res.render('login');
    }
}
module.exports = LoginController;
