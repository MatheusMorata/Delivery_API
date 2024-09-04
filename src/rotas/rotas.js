const express = require('express')
const ClienteController = require('../controller/clienteController')
const rotas = express.Router()

rotas.get('/', ClienteController.cadastro)

module.exports = rotas