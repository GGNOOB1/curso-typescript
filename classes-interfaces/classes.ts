// Criando a primeira classe

class Departamento {
    static anoFiscal: number = 2022;
    // private id: number;
    // public nome: string;
    protected funcionarios: string[] = [];

    static criarPessoa(nome: string) {
        return { nome: nome };
    }

    constructor(private readonly id: number, public nome: string) {
        // this.id = id;
        // this.nome = nome;
    };

    mostrarInfoDept(this: Departamento) {
        console.log(`Id: ${this.id} | Departamento: ${this.nome}`);
    }

    adicionarFuncionario(nome: string) {
        this.funcionarios.push(nome);
    }

    mostrarInfoFuncionarios() {
        console.log("Quantidade de funcionários: " + this.funcionarios.length);
        console.log("Nomes:", this.funcionarios);
    }
}

class DepartamentoTI extends Departamento {

    public reports: string[] = [];

    constructor(id: number, nome: string, public hardwares: string[],) {
        super(id, nome);
    }

    set setReports(report: string) {
        this.reports.push(report);
    }

    //this.reports[this.reports.length - 1];

    get getReports() {
        if (this.reports.length === 0) {
            throw new Error("Não há reports");
        } else {
            return this.reports;
        }
    }

    mostrarHardwares() {
        console.log("Itens:", this.hardwares);
    }

    adicionarFuncionarioTI(nome: string) {
        if (nome === "Jeff") {
            return;
        } else {
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