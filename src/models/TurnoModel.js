const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

module.exports=(sequelize, dataTypes)=>{
    const Turno = sequelize.define('Turno', {
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
    }, {
        tableName: 'turnos',
        timestamp: false
    });
    Turno.associate = (models)=>{
        Turno.hasMany(models.Aula, {
            foreignKey: 'id',
            as:'aula'
        })
    }

    return Turno;
}
