require('dotenv').config({ path: '../.env' })

const express = require('express')
const app = express()
const porta = process.env.PORTA

app.listen(porta, () => {
    console.log(`Servidor online  http://localhost:${porta}`)
})