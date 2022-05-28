const express = require ('express');
const router = express.Router();
const ServicoController = require('../controllers/ServicoController');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');



router.get('/cadastrar', AulaController.editar);
router.post('/cadastrar', upload.single('aula-img'), AulaController.criar);

router.get('/', AulaController.index);
router.get('/admin', auth, AulaController.admin);


router.get('/editar/:id', AulaController.editar);
router.put('/editar/:id', upload.single('aula-img'), AulaController.atualizar);

router.delete('/deletar/:id', AulaController.deletar);


module.exports = router; 