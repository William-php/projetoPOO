import { Produto } from './cadastrarp/produto';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  cadastrar: boolean = false;
  listaProdutos: Produto[] = [];

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }

  openCadastrar(): void {
    this.cadastrar = true;
  }

  receiveFecharCadastro(e: any): void {
    this.cadastrar = e;
  }
  receiveNovoProduto(e: any): void {
    console.log("novo produto: ", e);
    this.listaProdutos.push(e);
  }

  delete(i: number): void {
    console.log(i);
    this.listaProdutos.splice(i, 1);
  }

}
