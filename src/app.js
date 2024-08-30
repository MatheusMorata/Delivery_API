require('dotenv').config({ path: '../.env' })

const express = require('express')
const cors = require('cors')
const app = express()
const porta = process.env.PORTA


app.use(cors())
app.listen(porta, () => {
    console.log(`Servidor online  http://localhost:${porta}`)
})