const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');


const AlunosController = require('../controllers/AlunosController')
router.get('/', AlunosController.read);
router.get('/cadastro', AlunosController.create);
router.post('/cadastro', upload.single('aula-img'), AlunosController.store);


module.exports = router;
