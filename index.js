const express = require('express')
const app = express()

app.use(express.json())

const clienteRepository = require('./mongoDB/ClienteRepository')
const validaClientes = require('./validaLogin') 
app.get('/login/usuario', async function (req, res) {
  const loginCliente = req.body
  const respostaCliente = await clienteRepository.buscarCliente(loginCliente) 
  res.json(validaClientes.validalogin(loginCliente,respostaCliente))  
})


app.post('/cadastrar/usuario', async function (req, res) {
   const cliente = req.body
   console.log(cliente)
   const novoCliente = await clienteRepository.inserir(cliente)
   res.json({msg:'Sucesso', cliente: novoCliente})
})

app.delete('/apagar/usuario', async function (req, res) {
   const idUsuario = req.query.id
   const cliente = await clienteRepository.excluir(""+idUsuario)
  if(cliente === null) {
    res.json({msg:'Falha', cliente: 'Não foi possivel excluir usuário de id:'+idUsuario+' pois não existe esse usuário em banco!'})
  } 
    else {
   res.json({msg:'Sucesso!', cliente: cliente})
  }
})

app.put('/atualizar/usuario',async function (req, res) {
   const usuarioAtualizado = req.body
   console.log(usuarioAtualizado)
   const cliente = await clienteRepository.atualizar(usuarioAtualizado)
  if(cliente === null) {
    res.json({msg:'Falha', cliente: 'Não foi possivel Atualizar usuário de id:'+ usuarioAtualizado._id +' pois não existe esse usuário em banco!'})
  }
  else {
   res.json({msg:'Sucesso!', cliente: cliente})
  }
})

app.listen(3000)