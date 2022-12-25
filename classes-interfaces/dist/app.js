"use strict";
class Pessoa {
    constructor(n) {
        this.nome = n;
    }
    descricao(frase) {
        console.log(this.nome, frase);
    }
}
const pessoa1 = new Pessoa("Frase do gg:");
pessoa1.descricao("Ola, sou o gg e gosto de league of LENDAS");
let livro1;
livro1 = {
    nome: "Game of thrones",
    numeroPag: 2000,
    descricao: "Em busca do trono de ferro"
};
console.log(livro1);
