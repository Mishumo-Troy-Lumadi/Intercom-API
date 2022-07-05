const express = require('express');
let router = express.Router();
const {Auth} = require('../controllers')

router.post('/', Auth.signin);

module.exports = router;