const Producto = require("../models/producto")

const routes = {
    getAllPrd:async(req,res)=> {
        try{
        let data = await Producto.find({})
        // console.log(data)
        res.status(200).json(data)
        } catch(err){
            console.log(err)
        }
    }
}
module.exports=routes