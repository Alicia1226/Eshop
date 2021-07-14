const router = require('express').Router(); 
const product = require('../Controllers/controllers')

router.get('/api',product.getAllPrd)

module.exports=router