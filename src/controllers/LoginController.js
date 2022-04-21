const MohaveModel = require('../models/MohaveModel');

const LoginController = {
    index: (req, res) => {
        res.render('login');
    }
}
module.exports = LoginController;
