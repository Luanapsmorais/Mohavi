const { check } = require('express-validator');

module.exports = [
  check('nome')
    .notEmpty().withMessage('Campo nome é obrigatório!').bail()
    .isLength({ min: 8 }).withMessage('Campo nome precisa ter mais que 8 caracteres'),
    check('email')
    .notEmpty().withMessage('Campo email é obrigatório!').bail()
    .isEmail().withMessage('Campo email é obrigatório!'),
  check('telefone')
    .notEmpty().withMessage('Campo telefone é obrigatório!').bail()
    .isNumeric().withMessage('Campo telefone precisa ser um número'),
  check('password')
    .notEmpty().withMessage('Campo senha é obrigatório').bail()
    .isLength({ min: 8 }).withMessage('Campo senha precisa ter ao menos 8 caracteres!')
] 