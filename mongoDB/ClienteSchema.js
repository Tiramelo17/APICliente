const mongoose = require('./Conexao')
const { Schema } = require('mongoose')

const clienteSchema = new Schema({
  _id: Number,
  nome:  String, // String is shorthand for {type: String}
  cpf: String,
  email:   String,
  sexo:   String,
  senha:   String,
  rua: String,
  bairro: String,
  numeroCasa: Number,
  telefone: String,
});

const model = mongoose.model('clientes', clienteSchema)

module.exports = model