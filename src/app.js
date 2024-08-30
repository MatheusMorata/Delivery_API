require('dotenv').config({ path: '../.env' })
const express = require('express')
const cors = require('cors')
const rotas = require('./rotas/rotas')
const app = express()
const porta = process.env.PORTA


app.use(cors())
app.use('',rotas)
app.listen(porta, () => {
    console.log(`Servidor online  http://localhost:${porta}`)
})