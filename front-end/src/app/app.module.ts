import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { TubosComponent } from './tubos/tubos.component';
import { Exemplo07yComponent } from './exemplo07y/exemplo07y.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    DataBindComponent,
    TemplateComponent,
    TubosComponent,
    Exemplo07yComponent,
    InicioComponent,
    SobreComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthGuard],//força ele
  bootstrap: [AppComponent]
})
export class AppModule { }
