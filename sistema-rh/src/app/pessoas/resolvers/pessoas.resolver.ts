import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PessoasService } from '../services/pessoas.service';

@Injectable()
export class PessoasResolver implements Resolve<any>{

  constructor(private pessoasService: PessoasService){}

  resolve(){
    return this.pessoasService.getPessoas().pipe(
      catchError((error) => {
        return of('No data');
      })
    )
  }
}
