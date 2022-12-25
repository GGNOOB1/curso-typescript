enum cargos { ADMIN, ESTAGIARIO, CHEFE, ARTHUR };

const person = {
    nome: "Geraldo",
    idade: 19,
    hobbies: ['Jogar', 'Assistir'],
    listaObjetos: [1, "fsa", 3, 5, true, "Sei la", "Aslam"],
    cargo: cargos.ESTAGIARIO
};

function Pessoa(n: string, i: number, h: string[], l: any[], c: cargos) {
    this.nome = n;
    this.idade = i;
    this.hobbies = h;
    this.listaObjetos = l;
    this.cargo = c;
}

const pessoa1 = new Pessoa("Arhtur", 10, ["Dormir", "Comer"], ["Pc", "Celular", "Gato"], cargos.ADMIN);

const mapeamento = person.hobbies.map((value) => {
    return value.toUpperCase();

});

console.log(person);
console.log(mapeamento);

const filme: {
    dados: [string, number];
    lista: any[]
} = {
    dados: ['A era do gelo 4', 10],
    lista: [1, 2, 3, 4, 5]
}

console.log(filme);
console.log(pessoa1);