"use strict";
// Let e const
const pergunta = 'Qual seu nome e idade?';
let idade = 19;
// Arrow functions
let mostrarNome = (nome, idade) => {
    console.log(pergunta, "\nMeu nome é " + nome + " e minha idade é " + idade);
};
mostrarNome("Geraldo", 19);
// Funções com parâmetros padrões
let areaDoCirculo = (raio, PI = Math.PI) => {
    return "Minha área é de: " + PI * raio * raio;
};
console.log(areaDoCirculo(10));
// Operador spreed
let numbers = [1, 2, 3, 4, 5];
let numbers2 = [...numbers];
console.log(numbers);
console.log(numbers2);
let pessoa = {
    nome: "Geraldo",
    idade: 19
};
let pessoa2 = Object.assign({}, pessoa);
console.log(pessoa);
console.log(pessoa2);
// Rest Parameters = A partir de um array + um operador spreed é possível tornar os argumentos 
// passados pelo usuário sem limites, ou seja seram todos atribuidos ao array criado no parâmetro
let adicionar = (...numeros) => {
    let result = numeros.reduce((a, b) => a + b);
    console.log(result);
};
adicionar(5, 5, 2);
// Tuplas
function addDuasComidasFavoritas(comidas) {
    return comidas;
}
console.log(addDuasComidasFavoritas(["Batata", "Morango"]));
// Desestruturação de arrays
const hobbies = ["Jogar", "Assistir", "Pular", "Correr", "Sair"];
const [hobbie1, hobbie2, ...hobbiesRestantes] = hobbies;
console.log(hobbie1);
console.log(hobbie2);
console.log(hobbiesRestantes);
// Desestruturação de objetos
const filme = {
    titulo: "A era do gelo",
    nota: 10
};
const { titulo: nomeDoFilme, nota: Rate } = filme;
console.log(nomeDoFilme, Rate);
