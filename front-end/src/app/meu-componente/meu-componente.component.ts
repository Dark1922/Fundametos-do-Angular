import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exibirTexto!:boolean;
  //Diretiva ngIf
  acaoNgIf() {
  this.exibirTexto = !this.exibirTexto;
}
  //Diretiva NgFor
  cursos = ["HTML & CSS", "CSS Básico", "PHP Avançado", "Angular"];

 //Diretiva NGSWITH
 curso_selecionado = "PHP Avançado";

 //Diretiva NGCLASS todo boolean começa como false
 ligado: boolean = true;
}
