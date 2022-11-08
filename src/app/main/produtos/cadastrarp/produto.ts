export class Produto {
    public nome;
    public valor;
    public quantidade;
    constructor(nome: string, valor: number, quantidade: number)  {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}