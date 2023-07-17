import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './animes/animes.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { PracticaOneComponent } from './form-module/practica-one/practica-one.component';
import { DadoComponent } from './dado/dado.component';

const routes: Routes = [
{
  path:"animes",
  component:AnimesComponent
},
{
  path:"videojuegos",
  component:VideojuegosComponent
},
{
  path:"ngModules",
  component:PracticaOneComponent
},
{
  path:"ngDados",
  component:DadoComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
