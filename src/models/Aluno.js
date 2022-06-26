module.exports = (sequelize, dataTypes)=>{
    const Aluno = sequelize.define('Aluno', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        matricula: {
            type: dataTypes.STRING,
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
        data_nascimento: {
            type: dataTypes.DATEONLY,
            allowNull: false
        }, 
        altura: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        peso: {
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
          senha: {
            type: dataTypes.STRING,
            allowNull: false
            }

    }, {
        tableName: 'alunos',
        timestamp: true
    });
    /*Aula.associate = (models)=>{
        Aula.hasMany(models.Turno, {
            foreignKey: 'turnos_id',
            as:'turno'
        })
    }*/

    return Aluno;
}
