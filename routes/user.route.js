const express = require('express');
let router = express.Router();
const { User } = require('../controllers');

router.post('/', User.create);
router.get('/', User.all);
router.get('/:id', User.one);
router.put('/:id', User.update);
router.delete('/:id', User.delete);

module.exports = router;
