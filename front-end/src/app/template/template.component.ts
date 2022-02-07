import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //váriavel da página 1
  p1:boolean = true;

  //função para alterar a página
  alterarPagina(){
    this.p1 = !this.p1; //vai ficar false se for diferente de p1
  }
}
