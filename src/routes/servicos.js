const express = require ('express');
const router = express.Router();
const ServicoController = require('../controllers/ServicoController');
const validadorCadastroServicos = require('../middlewares/validadorCadastroServicos');
//const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer')

  

router.get('/cadastrar', ServicoController.editar);
router.post('/cadastrar', multer.single('servico-img'), validadorCadastroServicos, ServicoController.criar);

router.get('/', ServicoController.index);
router.get('/admin', auth, ServicoController.admin);


router.get('/editar/:id', ServicoController.editar);
router.put('/editar/:id', multer.single('servico-img'), validadorCadastroServicos, ServicoController.atualizar);

router.delete('/deletar/:id', ServicoController.deletar);


module.exports = router; 