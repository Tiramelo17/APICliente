const conn = require('./Conexao')
const ModelCliente = require('./ClienteSchema')

inserir = async (cliente) => {
  const clienteModel = new ModelCliente(cliente)
  const clienteAux = await buscarClienteId(cliente._id)
  if(clienteAux !== null){
    return "cliente já cadastrado"
  }
  const novoCliente = await clienteModel.save()

  return novoCliente
} 

const buscarCliente = async (loginCliente) => {
  loginAux = {email: ""}
  loginAux.email = loginCliente.email
  const cliente = await ModelCliente.find(loginAux)
  return cliente
}

const buscarClienteId = async (id) => {
  const cliente = await ModelCliente.findById(id)
  return cliente
}

const excluir = async (id) => {
  const cliente = await ModelCliente.findByIdAndRemove(id)
  return cliente
}


const atualizar = async (cliente) => {
  const clienteAux = await buscarClienteId(cliente._id)
  console.log(clienteAux)
  if(clienteAux === null){
    return null
  } else{
    const novoCliente = await ModelCliente.findOneAndUpdate(cliente._id,cliente)
    return novoCliente
  }
}
module.exports = {
  inserir,
  buscarCliente,
  excluir,
  atualizar
}