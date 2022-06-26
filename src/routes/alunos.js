var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'public/images/uploads');
  },

  filename(req, file, callback) {
    const [filename, extension] = file.originalname.split('.');
    callback(null, filename + '-' + Date.now() + '.' + extension);
  }
});

const upload = multer({ storage });

const AlunosController = require('../controllers/AlunosController')

// Cadastrar alunos
router.get('/cadastro', AlunosController.create);
router.post('/cadastro', upload.single('arquivo'), AlunosController.store);

// Autenticar aluno
router.post('/login', AlunosController.autenticar);



module.exports = router;



