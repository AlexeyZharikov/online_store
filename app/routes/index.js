const router = require('express').Router();

router.use('/products', require('./products'));
router.use('/order', require('./order'));

module.exports = router;



