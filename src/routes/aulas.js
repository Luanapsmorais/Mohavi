const express = require ('express');
const router = express.Router();
const validadorCadastroServicos = require('../middlewares/validadorCadastroAulas');
const AulasController = require('../controllers/AulasController');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer')

router.post('/cadastrar', multer.single('aula-img'), validadorCadastroAulas, AulasController.criar);
router.get('/cadastrar', AulasController.editar);

router.get('/', AulasController.index);
router.get('/admin', auth, AulasController.admin);

router.put('/editar/:id', multer.single('aula-img'), validadorCadastroAulas, AulasController.atualizar);
router.get('/editar/:id', AulasController.editar);

router.delete('/deletar/:id', AulasController.deletar);


module.exports = router; 