import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { Pessoas } from 'src/app/geral/interface/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  url = 'http://localhost:3000/pessoas'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getPessoas(): Observable<Pessoas[]>{
    return this.httpClient.get<Pessoas[]>(this.url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  getPessoaById(id: number): Observable<Pessoas> {
    return this.httpClient.get<Pessoas>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postPessoa(pessoa: Pessoas): Observable<Pessoas>{
    return this.httpClient.post<Pessoas>(this.url, JSON.stringify(pessoa), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePessoa(pessoa: Pessoas): Observable<Pessoas>{
    return this.httpClient.put<Pessoas>( this.url + '/' + pessoa.id,
      JSON.stringify(pessoa), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
  }

  deletePessoa(id: number){
    this.httpClient.delete<Pessoas>( this.url + '/' + id, this.httpOptions )
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
