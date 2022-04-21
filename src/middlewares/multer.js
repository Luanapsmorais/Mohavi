const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, callback){
        callback(null, 'public/images/uploads');
    },

    filename(req, file, callback){
        const [filename, extension] = file.originalname.split('.');
        callback(null, filename + '-' + Date.now() + "." + extension); //lemnrar de qdo o bruno falou sobre qtd de files com mesmo nome, por isso a data pra cada req

    }
});

module.exports = multer({ storage });