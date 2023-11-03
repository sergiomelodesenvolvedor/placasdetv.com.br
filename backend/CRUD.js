const mongoose = require("mongoose");

async function insereDados(
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
) {
  mongoose.connect("mongodb://172.17.0.2:27017/placasdetv", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Conectado ao MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Erro na conexão com o MongoDB:", err);
  });

  const ModeloDeDados = mongoose.model("usuarios", {
    email: String,
    senha: String,
    cep: String,
    nome: String,
    sobrenome: String,
    cpf: String,
    telefone: String,
    endereco: String,
    bairro: String,
    numero: String,
    complemento: String,
    cidade: String,
    estado: String,
  });

  const novoDado = new ModeloDeDados({
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
  });

  try {
    await novoDado.save(); // Agora usa-se await ao invés de um callback
    console.log("dados inseridos");
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
  }
}

module.exports = { insereDados };
