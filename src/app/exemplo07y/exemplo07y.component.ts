import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-exemplo07y',
  templateUrl: './exemplo07y.component.html',
  styleUrls: ['./exemplo07y.component.css']
})
export class Exemplo07yComponent implements OnInit {

  //Atributos
  private vetorCursos!: Curso[];
  private curso!: Curso;
  private id!:number; //identificação do curso

  //contrutor
  constructor(private servico:CursosService) { }

  //inicialização
  ngOnInit(): void {
  }

}
