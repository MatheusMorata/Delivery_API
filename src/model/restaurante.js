const {DataTypes, Model} = require('sequelize')
const conexao = require('../database/conexao')

class Restaurante extends Model {}

Restaurante.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        senha:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        conexao,
        modelName: 'Restaurante',
        timestamps: false,
    },
)

module.exports = Restaurante