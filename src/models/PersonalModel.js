const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

module.exports=(sequelize, dataTypes)=>{
    const Personal = sequelize.define('Personal', {
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
        especialidade: {
            type: dataTypes.STRING,
            allowNull: false
        },
        registro_cresf: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        telefone: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'personais',
        timestamp: false
    });
    /*Aula.associate = (models)=>{
        Aula.hasMany(models.Turno, {
            foreignKey: 'turnos_id',
            as:'turno'
        })
    }*/

    return Personal;
}
