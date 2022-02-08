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
   vetorCursos!: Curso[];
   curso!: Curso;
   id!:number;


  //contrutor
  constructor(private servico:CursosService) { }

  //inicialização
  ngOnInit() {
    this.id -1;
    //this.curso = new Curso();

    this.vetorCursos = this.servico.listar();
    console.log(this.vetorCursos);
  }

  //Cadastrar
  cadastrar() {
    this.servico.cadastrar(this.curso);
    //this.curso = new Curso();
     alert("Cadastrado com sucesso!");
  }

  //Excluir
  excluir(id:number) {
    this.servico.excluir(id);
    this.id = -1;
  }

  //editar
  editar(id:number) {
    this.id = id;
    this.curso = new Curso(
     this.vetorCursos[id].nomeCurso,
     this.vetorCursos[id].valorCurso,
     this.vetorCursos[id].areaCurso,
     );

  }

  atualizar() {
    this.servico.alterar(this.id, this.curso);
    //this.curso = new Curso();
    this.id = -1;
  }
}
