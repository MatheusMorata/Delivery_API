const {DataTypes, Model} = require('sequelize')
const conexao = require('../database/conexao')

class Prato extends Model {}

Prato.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        IdRestaurante: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Restaurante',
                key: 'id',
            },
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preco: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    },
    {
        conexao,
        modelName: 'Prato',
        timestamps: false,
    },
)

module.exports = Prato