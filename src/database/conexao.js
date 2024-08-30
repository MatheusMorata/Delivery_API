require('dotenv').config({path: '../../.env'})
const Sequelize = require('sequelize')

const host = process.env.HOST_BANCO_DE_DADOS
const nome = process.env.NOME_BANCO_DE_DADOS
const porta = process.env.PORTA_BANCO_DE_DADOS
const senha = process.env.SENHA_BANCO_DE_DADOS
const usuario = process.env.USUARIO_BANCO_DE_DADOS

const conexao = new Sequelize({
    dialect: 'postgres',
    host: host,
    port: porta,
    username: usuario,
    password: senha,
    database: nome,
});

module.exports = conexao