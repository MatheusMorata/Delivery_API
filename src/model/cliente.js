const {DataTypes, Model} = require('sequelize')
const conexao = require('../database/conexao')

class Cliente extends Model {}

Cliente.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        conexao,
        modelName: 'Cliente',
        timestamps: false,
    }
)

module.exports = Cliente