const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

module.exports=(sequelize, dataTypes)=>{
    const Turma = sequelize.define('Turma', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
    }, {
        tableName: 'turmas',
        timestamps: false
    });
    /*Aula.associate = (models)=>{
        Aula.hasMany(models.Turno, {
            foreignKey: 'turnos_id',
            as:'turno'
        })
    }*/

    return Turma;
}
