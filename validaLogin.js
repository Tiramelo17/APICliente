
const validalogin = (loginPassado, loginConsultado) => {
  if(loginConsultado.length === 0){
    return ({msg: "Falha", response: "Usuário não cadastrado na base de dados"})
  }
  if(loginConsultado[0].senha !== loginPassado.senha){
    return ({msg: "Falha", response: "Senha incorreta para o email passado"})
  }
  return({msg: "Sucesso", response: loginConsultado[0]})
}

module.exports = {
  validalogin
}