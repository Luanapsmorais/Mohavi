const express = require ('express');
const router = express.Router();
const validadorCadastroAulas = require('../middlewares/validadorCadastroAulas');
const AulasController = require('../controllers/AulasController');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer')

router.get('/', AulasController.read);
router.post('/cadastrar', multer.single('aula-img'), validadorCadastroAulas, AulasController.create);
router.get('/cadastrar/:id', AulasController.edit);
router.post('/cadastrar-aulas', AulasController.store);

router.get('/admin', auth, AulasController.admin);

router.put('/editar/:id', multer.single('aula-img'), validadorCadastroAulas, AulasController.update);
router.get('/editar/:id', AulasController.edit);

router.delete('/deletar/:id', AulasController.delete);


module.exports = router; 