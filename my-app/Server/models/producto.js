const mongoose = require("mongoose");
const Schema = mongoose.Schema;


 const productoSchema = new Schema({
   Name: {
     type: String,
     required: true,
     unique: true,
   },
   Price: {
     type: String,
     required: true,
   },
   Rating: {
     type: String,
     required: true,
   },
   tax: {
     type: String,
     required: true,
   },

   Adress: {
     type: String,
     required: true,
   },
   Brand: {
     type: String,
     required: true,
   },
   img: {
     type: String,
     required: true,
   },
 });

// const productoSchema = new Schema({
//      Name: {
//          type: String,
//          required: true,
//          unique:true
//          }
// })

const Producto = mongoose.model("productos", productoSchema);
module.exports = Producto;
