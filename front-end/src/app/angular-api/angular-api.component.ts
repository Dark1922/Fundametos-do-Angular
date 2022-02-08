
import { Cursos } from './CursoModel';
import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';



@Component({
  selector: 'app-angular-api',
  templateUrl: './angular-api.component.html',
  styleUrls: ['./angular-api.component.css']
})
export class AngularApiComponent implements OnInit {

  cursos: Array<Cursos> = [];
  curso = {} as Cursos;
  total: any;


  constructor(private cursoService:CursoService) { }

  ngOnInit(): void {
        this.selecao();
  }

  //cadastrar
  cadastar() {

    if (this.curso.id != null && this.curso.id.toString().trim() != null) {
      this.cursoService.updateUsuario(this.curso).subscribe(data => {
        this.novo();
        this.selecao();
        console.info("chamou update");
      });
    } else {
    this.cursoService.salvarCurso(this.curso).subscribe(res =>{
      this.selecao();
      this.novo();
    });
    }
  }
  //seleção
  selecao() {
    this.cursoService.obeterCurso()?.subscribe(res => {
      this.cursos = res;
    });
  }


  remover(id: number, index: any){

      if(confirm('Deseja mesmo remover?')) {

      this.cursoService.deletarCurso(id).subscribe(data => {

       this.cursos.splice(index, 1);/*Remover da Tela */

     //carrega a lista ao ser deletado
      this.selecao();
      });
      }
    }

  //Seleciona Curso especifico
  selecionarCurso(curso: Cursos) {

    this.curso.id = curso.id;
    this.curso.nomeCurso = curso.nomeCurso;
    this.curso.areaCurso = curso.areaCurso;
    this.curso.valorCurso = curso.valorCurso;

  }

  novo() {
    this.curso = new Cursos();
  }
}
