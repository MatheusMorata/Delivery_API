const express = require('express')
const rotas = express.Router()

rotas.get('/', async (req,res) => {
    res.send('MECTREFE')
})

module.exports = rotas