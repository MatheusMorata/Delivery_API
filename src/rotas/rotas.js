const express = require('express')
const rotas = express.Router()

// Todas as rotas destinadas ao cliente
const ClienteController = require('../controller/clienteController')
const Cliente = new ClienteController()
rotas.get('/', Cliente.cadastro)

module.exports = rotas