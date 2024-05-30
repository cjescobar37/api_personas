import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    MainComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent, ResultadosComponent
  ]
})
export class ListadoModule { }
