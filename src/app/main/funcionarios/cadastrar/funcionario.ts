export class Funcionario {
    public nome;
    public idade;
    public matricula;

    constructor(nome: string, idade: number, matricula: string) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula
    }
}