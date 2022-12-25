interface Descritiva {
    nome: string;

    descricao(frase: string): void;
}

class Pessoa implements Descritiva {

    nome: string;

    constructor(n: string) {
        this.nome = n;
    }

    descricao(frase: string) {
        console.log(this.nome, frase);
    }

}


const pessoa1 = new Pessoa("Frase do gg:");
pessoa1.descricao("Ola, sou o gg e gosto de league of LENDAS");

type livro = {
    nome: string;
    numeroPag: number;
    descricao: string;
};

let livro1: livro;

livro1 = {
    nome: "Game of thrones",
    numeroPag: 2000,
    descricao: "Em busca do trono de ferro"
}

console.log(livro1);