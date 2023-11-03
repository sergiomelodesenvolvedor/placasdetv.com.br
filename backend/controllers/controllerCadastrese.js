const crud = require("../CRUD.js");

function validarEmail(email){
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexEmail.test(email);
}

function validarSenha(senha){
  
}

async function controllerCadastrese(req, res) {
  const {
    email,
    senha,
    cep,
    nome,
    sobrenome,
    cpf,
    telefone,
    endereco,
    bairro,
    numero,
    complemento,
    cidade,
    estado,
  } = req.body;
  
  if(!validarEmail(email)){
    return res.status(400).json({ message: "E-mail inválido" }); 
    
  }

  await crud.insereDados(
    email,
    senha,
    cep,
    nome,
    sobrenome,
    cpf,
    telefone,
    endereco,
    bairro,
    numero,
    complemento,
    cidade,
    estado
  );
  res.status(200).json({ message: "controller funcionando" });
}
module.exports = controllerCadastrese;
