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

import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './auth.guard';
import { AngularApiComponent } from './angular-api/angular-api.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    DataBindComponent,
    TemplateComponent,
    TubosComponent,
    InicioComponent,
    SobreComponent,
    Error404Component,
    AngularApiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],//força ele
  bootstrap: [AppComponent]
})
export class AppModule { }
