import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CadastrarComponent } from './funcionarios/cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastrarpComponent } from './produtos/cadastrarp/cadastrarp.component';



@NgModule({
  declarations: [
    MainComponent,
    FuncionariosComponent,
    CadastrarComponent,
    HomeComponent,
    ProdutosComponent,
    CadastrarpComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  // exports : [CadastrarComponent, CadastrarpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
