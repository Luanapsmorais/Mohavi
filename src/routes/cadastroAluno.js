const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const alunosContoller = require('../controllers/AlunosController')


const MohaveController = require('../controllers/MohaveController')
router.get('/', MohaveController.index);
router.get('/cadastro', MohaveController.cadastro);
router.post('/cadastro', upload.single('servico-img'), MohaveController.cadastro);
router.post('/cadastro-test', alunosContoller.create);

module.exports = router;
