import { Injectable } from '@angular/core';
import { Curso } from './Curso';

//acesso total do serviço
@Injectable({
  providedIn: 'root'
})

//Classe
export class CursosService {

  //Constuctor
  constructor() { }

  //Vetor de cursos
  private vetorCursos: Curso[] = [ //criando com construtor os cursos
    new Curso('Angular', 800, 'Desenvolvimento'),
    new Curso('PHP', 590, "Desenvolvimento"),
    new Curso('Photoshop', 470, "Design")
  ];

  //cadastro de cursos
  public cadastrar(curso: Curso) {
     //salva um vetor sendo texto numbero ou objeto, aqyu sendo o curso
    this.vetorCursos.push(curso);
  }
  //Seleão de cursos
  public listar() {
    return this.vetorCursos;
  }
  //Alteração de cursos
  public alterar(id:number , curso:Curso) {
    this.vetorCursos[id] = curso;
    //vai pegar o id do objeto e atribuir para um novo valor
  }
  //Exclusão de cursos
  public excluir(id:number){
    this.vetorCursos.splice(id, 1);
    //splice 2 parametros o elemento por onde queremos excluir e a qtd 1 objeto
  }

}
