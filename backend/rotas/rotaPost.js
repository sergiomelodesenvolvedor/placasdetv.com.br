const express = require("express");
const routerPost = express.Router();
const controllerCadastrese = require('../controllers/controllerCadastrese.js')

routerPost.post("/login",(_req,res,_next)=>{
    res.status(200).json({message:"olá mundo"});
})


routerPost.post("/cadastrarse",controllerCadastrese)


module.exports = routerPost;