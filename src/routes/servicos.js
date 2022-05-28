const express = require ('express');
const router = express.Router();
const ServicoController = require('../controllers/ServicoController');
const validadorCadastroServicos = require('../middlewares/validadorCadastroServicos');
//const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer')

  


router.post('/cadastrar', multer.single('servico-img'), validadorCadastroServicos, AulasController.criar);
router.get('/cadastrar', AulasController.editar);

router.get('/', AulasController.index);
router.get('/admin', auth, AulasController.admin);



router.put('/editar/:id', multer.single('servico-img'), validadorCadastroServicos, AulasController.atualizar);
router.get('/editar/:id', AulasController.editar);

router.delete('/deletar/:id', AulasController.deletar);


module.exports = router; 