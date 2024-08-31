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
    },
    {
        conexao,
        modelName: 'Pedido',
        timestamps: false,
    }
)