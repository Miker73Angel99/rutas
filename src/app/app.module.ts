import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AnimesComponent } from './animes/animes.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormModuleModule } from './form-module/form-module.module';
import { DadoComponent } from './dado/dado.component';
import { Dado1Component } from './dado/dado1/dado1.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimesComponent,
    VideojuegosComponent,
    DadoComponent,
    Dado1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
