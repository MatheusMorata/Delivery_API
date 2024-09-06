require('dotenv').config()
const express = require('express')
const app = express()
const rotas = require('../src/rotas/rotas')
const conexao = require('../src/database/conexao')
const porta = process.env.PORTA 

app.use(express.json())
app.use('', rotas)
app.listen(porta, () => {
  console.log(`Servidor online  http://localhost:${porta}`)
});

(async () => {
  try{
    await conexao.sync()
  }catch(error){
    console.log('Nao conectou com o banco de dados: ',error)
  }
})