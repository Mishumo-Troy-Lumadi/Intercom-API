const express = require('express');
let router = express.Router();
const { User, Auth } = require('./routes');

router.use('/user',User)
router.use('/auth',Auth)

module.exports = router;