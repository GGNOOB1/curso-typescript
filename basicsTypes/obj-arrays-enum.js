var cargos;
(function (cargos) {
    cargos[cargos["ADMIN"] = 0] = "ADMIN";
    cargos[cargos["ESTAGIARIO"] = 1] = "ESTAGIARIO";
    cargos[cargos["CHEFE"] = 2] = "CHEFE";
    cargos[cargos["ARTHUR"] = 3] = "ARTHUR";
})(cargos || (cargos = {}));
;
var person = {
    nome: "Geraldo",
    idade: 19,
    hobbies: ['Jogar', 'Assistir'],
    listaObjetos: [1, "fsa", 3, 5, true, "Sei la", "Aslam"],
    cargo: cargos.ESTAGIARIO
};
function Pessoa(n, i, h, l, c) {
    this.nome = n;
    this.idade = i;
    this.hobbies = h;
    this.listaObjetos = l;
    this.cargo = c;
}
var pessoa1 = new Pessoa("Arhtur", 10, ["Dormir", "Comer"], ["Pc", "Celular", "Gato"], cargos.ADMIN);
var mapeamento = person.hobbies.map(function (value) {
    return value.toUpperCase();
});
console.log(person);
console.log(mapeamento);
var filme = {
    dados: ['A era do gelo 4', 10],
    lista: [1, 2, 3, 4, 5]
};
console.log(filme);
console.log(pessoa1);
