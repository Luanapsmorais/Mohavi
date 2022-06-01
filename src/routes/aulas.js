const express = require ('express');
const router = express.Router();
const AulaController = require('../controllers/AulaController');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');



router.get('/cadastrar', AulaController.editar);
router.post('/cadastrar', upload.single('servico-img'), AulaController.criar);

router.get('/', AulaController.index);
router.get('/admin', auth, AulaController.admin);


router.get('/editar/:id', AulaController.editar);
router.put('/editar/:id', upload.single('servico-img'), AulaController.atualizar);

router.delete('/deletar/:id', AulaController.deletar);


module.exports = router; 