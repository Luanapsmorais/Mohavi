const express = require('express');
const MohaveController = require('../controllers/MohaveController');
const router = express.Router();

router.get('/', MohaveController.index);

module.exports = router;





