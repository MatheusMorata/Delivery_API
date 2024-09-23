const express = require('express')
const rotas = express.Router()

// Todas as rotas destinadas ao cliente
const ClienteController = require('../controller/clienteController')
const Cliente = new ClienteController()
rotas.get('/', Cliente.cadastro)

// Todas as rotas destinadas ao pedido
const PedidoController = require('../controller/pedidoController')
const Pedido = new PedidoController()

// Todas as rotas destinadas ao prato
const PratoController = require('../controller/pratoController')
const Prato = new PratoController()

// Todas as rotas destinadas ao restaurante
const RestauranteController = require('../controller/restauranteController')
const Restaurante = new RestauranteController()

module.exports = rotas