const mongoose = require("mongoose");
// const Prod = require('../models/producto')

mongoose.connect("mongodb://localhost:27017/Eshop", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", async() => {
    console.log("connection to db established")
});

//module.exports = db;
