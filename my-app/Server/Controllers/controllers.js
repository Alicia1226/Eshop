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
    },
    getPrd:async(req,res)=>{
        let name = req.params.name
        let data = await Producto.find({name})
        console.log(data)
        res.status(200).json(data)

    }

}
module.exports=routes