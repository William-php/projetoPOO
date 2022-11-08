import { Produto } from './produto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastrarp',
  templateUrl: './cadastrarp.component.html',
  styleUrls: ['./cadastrarp.component.css']
})
export class CadastrarpComponent implements OnInit {
  @Output() fecharCadastro: any = new EventEmitter;
  @Output() novoProduto: any = new EventEmitter;
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    let regStr = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
    return this.fb.group({
      nome: [, [Validators.required, Validators.pattern(regStr)]],
      preco: [, [Validators.required, Validators.min(0)]],
      quantidade: [, [Validators.required, Validators.min(0)]]
    });
  }
  get f(): Object {
    return this.form.value;
  }
  fecharProduto(): void {
    this.fecharCadastro.emit(false)
  }
  registrarProduto(): void {
    console.log("status: ", this.form.status);
    console.log("get: ", this.f);
    if (this.form.valid) {
      this.novoProduto.emit(new Produto(this.f['nome'], this.f['preco'], this.f['quantidade']));
      this.form.reset();
    }
    
  }
}
