import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home/home.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MainComponent } from './main.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: MainComponent, children: [
    {path: "produtos", component: ProdutosComponent},
    {path: "funcionarios", component: FuncionariosComponent}
  ]},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
