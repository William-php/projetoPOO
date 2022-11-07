import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';



@NgModule({
  declarations: [
    MainComponent,
    FuncionariosComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
