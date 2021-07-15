const router = require('express').Router(); 
const product = require('../Controllers/controllers')

router.get('/api',product.getAllPrd)
router.get('/api/:name',product.getPrd)

module.exports=router