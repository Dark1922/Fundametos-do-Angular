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



@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    DataBindComponent,
    TemplateComponent,
    TubosComponent,
    Exemplo07yComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
