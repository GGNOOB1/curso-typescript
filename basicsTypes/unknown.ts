let variavel: unknown;
let idade: number;
let nome: string;
let itsTrue: boolean;

// Dependendo do valor atribuido a variável "variavel" o valor é atribuido a uma
// variável do tipo específico
variavel = false;

if (typeof variavel === "string") {
    nome = variavel;
    console.log(nome);
} else if (typeof variavel === "number") {
    idade = variavel;
    console.log(idade);
} else if (typeof variavel === "boolean") {
    itsTrue = variavel;
    console.log(itsTrue);
}