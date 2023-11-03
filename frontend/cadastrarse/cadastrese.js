const buttonCadastrarse = document.querySelector("#button-enviar");
buttonCadastrarse.addEventListener(
  "click",

  function () {

    const url = "http://localhost:3002/cadastrarse";
    const dados = {
      email:document.querySelector("#input-email").value,
      senha:document.querySelector("#input-senha").value,
      cep:document.querySelector("#input-cep").value,
      nome:document.querySelector("#input-nome").value,
      sobrenome:document.querySelector("#input-sobrenome").value,
      cpf:document.querySelector("#input-cpf-cnpj").value,
      telefone:document.querySelector("#input-telefone").value,
      endereco:document.querySelector("#input-endereco").value,
      bairro:document.querySelector("#input-bairro").value,
      numero:document.querySelector("#input-numero").value,
      complemento:document.querySelector("#input-complemento").value,
      cidade:document.querySelector("#input-cidade").value,
      estado:document.querySelector("#input-estado").value,
    };
    axios.post(url,dados);

    
  }
);
