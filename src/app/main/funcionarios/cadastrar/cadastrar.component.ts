import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from './funcionario';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @Output() fecharCadastrar: any = new EventEmitter;
  @Output() novoFuncionairo: any = new EventEmitter;
  funcionario: Funcionario;
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      nome: [, [Validators.required]],
      idade: [, [Validators.required, Validators.min(16)]],
      matricula: [, [Validators.required, Validators.minLength(5)]]
    });
  }

  fecharCadastro(): void {
    this.fecharCadastrar.emit(false);
  }

  get f(): Object {
    return this.form.value
  }

  registrarFuncionario(): void {
    if (this.form.status == "VALID") {
      this.novoFuncionairo.emit(new Funcionario(this.f['nome'], this.f['idade'], this.f['matricula']));
      this.form.reset();
    }
  }

}
