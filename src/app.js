require('dotenv').config({ path: '../.env' })
const express = require('express')
const cors = require('cors')
const rotas = require('./rotas/rotas')
const app = express()
const conexao = require('./database/conexao')
const porta = process.env.PORTA

app.use(express.json())
app.use(cors())
app.use('',rotas)
app.listen(porta, () => {
    console.log(`Servidor online  http://localhost:${porta}`)
})


( async () => {
    try{
        await conexao.sync()
    }catch(error){
        console.log("Conexao com banco de dados falhou")
    }
})