const express = require('express')
const rotas = express.Router()

// Todas as rotas destinadas ao cliente
const ClienteController = require('../controller/clienteController')
rotas.get('/', ClienteController.cadastro)

module.exports = rotas