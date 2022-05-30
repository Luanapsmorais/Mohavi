const express = require ('express');
const router = express.Router();
const AulasController = require('../controllers/AulasController');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');

router.get('/cadastrar', AulasController.editar);
router.post('/cadastrar', upload.single('aula-img'), AulasController.criar);

router.get('/', AulasController.index);
router.get('/admin', auth, AulasController.admin);

router.get('/editar/:id', AulasController.editar);
router.put('/editar/:id', upload.single('aula-img'), AulasController.atualizar);

router.delete('/deletar/:id', AulasController.deletar);

module.exports = router; 