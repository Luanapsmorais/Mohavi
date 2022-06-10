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
    /*Aula.associate = (models)=>{
        Aula.hasMany(models.Turno, {
            foreignKey: 'turnos_id',
            as:'turno'
        })
    }*/

    return Turno;
}
