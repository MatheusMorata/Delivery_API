const {DataTypes, Model} = require('sequelize')
const conexao = require('../database/conexao')

class Pedido extends Model {}

Pedido.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        IdRestaurante: {
            type: DataTypes.INTEGER,
            references:{
                model: 'Restaurante',
                key: 'id',
            },
            allowNull: false,
        },
        IdCliente: {
            type: DataTypes.INTEGER,
            references:{
                model: 'Cliente',
                key: 'id',
            },
            allowNull: false,
        },
        IdPrato: {   
            type: DataTypes.INTEGER,
            references:{
                model: 'Prato',
                key: 'id',
            },
            allowNull: false,
        },
        valorFinal: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        enderecoCliente: {
            type: DataTypes.STRING,
            references:{
                model: 'Cliente',
                key: 'endereco',
            },
            allowNull: false,
        },
        telefoneCliente: {
            type: DataTypes.STRING,
            references: {
                model: 'Cliente', 
                key: 'telefone', 
            },
            allowNull: false,
        },
        status:{
            type: DataTypes.ENUM('EM_PREPARO','SAIU_PARA_ENTREGA','ENTREGUE'),
            allowNull: false,
        },
    },
    {
        conexao,
        modelName: 'Pedido',
        timestamps: false,
    }
)

module.exports = Pedido