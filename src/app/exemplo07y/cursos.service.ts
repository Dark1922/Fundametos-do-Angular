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

  //Seleão de cursos

  //Alteração de cursos

  //Exclusão de cursos

  //Seleção de um curso especifico
}
