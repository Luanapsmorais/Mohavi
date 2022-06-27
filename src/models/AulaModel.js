const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');
const { createDeflate } = require('zlib');

module.exports=(sequelize, dataTypes)=>{
    const Aula = sequelize.define('Aula', {
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
        valor: {
            type: dataTypes.DECIMAL,
            allowNull: false
        }, 
        descricao: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'aulas',
        timestamps: false
    });
    Aula.associate = (models)=>{
        Aula.hasMany(models.Turno, {
            foreignKey: 'id',
            as:'turno'
        })
    }

    return Aula;
}
