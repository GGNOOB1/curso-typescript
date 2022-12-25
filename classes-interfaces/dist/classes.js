"use strict";
// Criando a primeira classe
class Departamento {
    static criarPessoa(nome) {
        return { nome: nome };
    }
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        // private id: number;
        // public nome: string;
        this.funcionarios = [];
        // this.id = id;
        // this.nome = nome;
    }
    ;
    mostrarInfoDept() {
        console.log(`Id: ${this.id} | Departamento: ${this.nome}`);
    }
    adicionarFuncionario(nome) {
        this.funcionarios.push(nome);
    }
    mostrarInfoFuncionarios() {
        console.log("Quantidade de funcionários: " + this.funcionarios.length);
        console.log("Nomes:", this.funcionarios);
    }
}
Departamento.anoFiscal = 2022;
class DepartamentoTI extends Departamento {
    constructor(id, nome, hardwares) {
        super(id, nome);
        this.hardwares = hardwares;
        this.reports = [];
    }
    set setReports(report) {
        this.reports.push(report);
    }
    //this.reports[this.reports.length - 1];
    get getReports() {
        if (this.reports.length === 0) {
            throw new Error("Não há reports");
        }
        else {
            return this.reports;
        }
    }
    mostrarHardwares() {
        console.log("Itens:", this.hardwares);
    }
    adicionarFuncionarioTI(nome) {
        if (nome === "Jeff") {
            return;
        }
        else {
            this.funcionarios.push(nome);
        }
    }
}
const dep1 = new Departamento(1, "Tecnologia");
dep1.adicionarFuncionario("Malu");
dep1.adicionarFuncionario("Arthur");
const dep2 = new DepartamentoTI(2, "Desenvolvimento", ["Pcs", "Notebooks", "Celulares", "Impressoras", "Monitores"]);
dep2.adicionarFuncionarioTI("Juju");
dep2.adicionarFuncionarioTI("Gege");
dep2.adicionarFuncionarioTI("Jeff");
dep1.mostrarInfoDept();
dep1.mostrarInfoFuncionarios();
dep2.mostrarInfoDept();
dep2.mostrarInfoFuncionarios();
dep2.mostrarHardwares();
dep2.setReports = "Arthur quebrou um dos nossos celulares";
console.log(dep2.getReports);
let pessoa = Departamento.criarPessoa("Gege");
console.log(pessoa);
let anoFiscal = Departamento.anoFiscal;
console.log(anoFiscal);
