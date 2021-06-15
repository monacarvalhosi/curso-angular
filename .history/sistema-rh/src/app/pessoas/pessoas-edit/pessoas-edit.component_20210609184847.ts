import { Component, Input, OnInit } from '@angular/core';
import { Pessoas } from 'src/app/geral/interface/pessoas';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoas-edit',
  templateUrl: './pessoas-edit.component.html',
  styleUrls: ['./pessoas-edit.component.css']
})
export class PessoasEditComponent implements OnInit {

  pessoa = {} as Pessoas;

  @Input() editPessoa = {} as Pessoas;

  constructor( private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }

  savePessoa(editPessoa: Pessoas){
    this.pessoa = {...editPessoa};
    this.pessoasService.updatePessoa(this.pessoa).subscribe((pessoas: Pessoas)=>{
      this.editPessoa = pessoas;
    })
  }

}
