import { Funcionario } from './cadastrar/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  cadastrar: boolean = false;
  listaFuncionarios: Funcionario[] = [];
  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  openCadastrar(): void {
    this.cadastrar = true;
  }

  receiveFecharCadastro(e: boolean): void {
    this.cadastrar = e;
  }

  delete(i: number): void {
    this.listaFuncionarios.splice(i, 1);
  }

  receiveNovoFuncionario(funcionario: any): void {
    console.log("Funcionario: ", funcionario);
    this.listaFuncionarios.push(funcionario);
    console.log("Lista: ", this.listaFuncionarios);
  }

}
