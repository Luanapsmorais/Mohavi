const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

module.exports=(sequelize, dataTypes)=>{
    const Aluno = sequelize.define('Aluno', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        nome: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        sobrenome: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        matricula: {
            type: dataTypes.INTEGER,
            allowNull: false
        }, 
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: dataTypes.STRING,
            allowNull: false
        },
        data_nascimento: {
            type: dataTypes.DATE,
            allowNull: false
        },
        altura: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        peso: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
    }, {
        tableName: 'alunos',
        timestamps: false
    });
    /*Aula.associate = (models)=>{
        Aula.hasMany(models.Turno, {
            foreignKey: 'turnos_id',
            as:'turno'
        })
    }*/

    return Aluno;
}
