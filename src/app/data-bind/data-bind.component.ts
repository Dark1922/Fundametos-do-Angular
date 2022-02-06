import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nome:string = "ralf";
  valor: number = 1;
  valor2: number =2;
  imagem:string = "https://s2.glbimg.com/9DtSY6ZLYx173tSW9KZiNcoIbDQ=/620x430/e.glbimg.com/og/ed/f/original/2019/02/15/gettyimages-8454560281.jpg"
  mensagem(){
     window.alert("olá mundo");
  }


}
