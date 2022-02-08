import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Cursos } from './CursoModel';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  url ="http://localhost:8080/cursos/";
  vetor!: Cursos[];

  constructor(private http: HttpClient) { }

  obeterCurso(): Observable<any> | undefined {
   return  this.http.get(this.url);
  }

  deletarCurso(id: number): Observable<any>{
    return this.http.delete(this.url + id)
  }

  salvarCurso(curso: Cursos) {
    return this.http.post(this.url , curso)
  }

  updateUsuario(curso: Cursos) : Observable<any>{
    return this.http.put(this.url + curso.id, curso);
  }

  dadosCursoPorId(id: any) {
    return this.http.get(this.url + id)
  }
}
