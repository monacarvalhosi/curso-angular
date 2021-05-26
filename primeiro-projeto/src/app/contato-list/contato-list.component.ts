import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContato } from '../interface/icontato';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {
  listaContatos: IContato[] = [];
  flagListaVazia: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    /*this.listaContatos = [
      { codigo: 10, nome: 'Rafa', telefone: '99999-7721', idade: 20},
      { codigo: 20, nome: 'Julio', telefone: '98888-7721', idade: 55},
      { codigo: 10, nome: 'Tatiana', telefone: '94444-7721', idade: 28},
    ]*/

    if(this.listaContatos.length === 0) this.flagListaVazia = true;

  }

  VoltarBtn() {
    this.router.navigate(['']);
  }

}
