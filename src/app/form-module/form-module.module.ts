import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticaOneComponent } from './practica-one/practica-one.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PracticaOneComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PracticaOneComponent
  ]
})
export class FormModuleModule { }
