const router = require('express').Router(); 
const product = require('../Controllers/controllers')

router.get('/',product.getAllPrd)

module.exports=router