const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

module.exports = {
  aulas: [
        { 
            id1:  1,
            nome: 'Consultoria Fitness',
            valor: 'R$ 150,00',
            descricao: "Consultoria personalizada de treinos",
            image: 'personal.jpg'
        },
        {
                id2: 2,
                nome: 'Treino com personal',
                valor: 'R$ 180,00',
                descricao: "Treino com personal individual"
        },
        {
                id3: 3,
                nome: 'Plano alimentar',
                valor: 'R$ 550,00',
                descricao: "Pacote de treino 5x na semana com adicional de plano alimentar exclusivo, feito pelo nosso nutricionista"
        }
    ],


    index () {
        return this.aulas
    },

    criar ({ nome, valor, descricao }, file) {
        if (!nome || !valor || !descricao) return
        const filePath = file ? path.join('/images/uploads', file.filename) : ''
        this.aulas.push({ id: uuid(), nome, valor, descricao, image: filePath});
    },

    buscar (id) {
        return this.aulas.find(aula => aula.id == id);
    },

    atualizar (id, {nome, valor, descricao }) {
        if (!id) return
    
        if (!nome || !valor || !descricao) return
        const aula = this.buscar(id);

        aula.nome = nome;
        aula.valor = valor;
        aula.descricao = descricao;
    },

    deletar (id) {
        if (!id) return
        const aula = this.buscar(id);
        const filePath = aula.image;

        fs.unlink('public' + filePath, (err) => console.log('err'));

        const index = this.aulas.findIndex(aula =>aula.id == id);
        this.aulas.splice(index, 1);

    }

};
