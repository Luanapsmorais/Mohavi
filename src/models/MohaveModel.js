const { Alunos } = require('sequelize')





module.exports = (sequelize, dataTypes) => {
    class Alunos extends Model{
       
    }
    Alunos.init({
        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
            nome:{
            type: dataTypes.STRING,
            allowNull: false
        },
            sobreNome:{
            type: dataTypes.STRING,
            allowNull: false
        },
        matricula:{
            type:dataTypes.INTEGER,
            allowNull:false
        }
    }, {
        sequelize, 
        tablename: 'alunos',
        timestamps:false
    })

    return Alunos
}



