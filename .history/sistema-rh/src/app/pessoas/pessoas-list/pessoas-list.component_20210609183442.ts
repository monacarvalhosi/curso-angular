import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoas } from 'src/app/geral/interface/pessoas';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent implements OnInit {
  nomeFuncionaria = "Maria Benitez";
  pessoas: Pessoas[] = [];
  search = '';
  items = ['caixa', 'lapis', 'leo', 'noite', 'sol', 'caixa'];
  hoje = '2021-06-07';
  preco = 19.90;
  editPessoa = {} as Pessoas;

  constructor(private router: Router, private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasService.getPessoas().subscribe((pessoas: Pessoas[])=>{
      this.pessoas = pessoas;
    });
  }

  open(){
    this.router.navigate(['/pessoas/edit']);
  }

  deletePessoa(pessoa: Pessoas){
    this.pessoasService.deletePessoa(pessoa.id).subscribe(()=>{
      this.getPessoas();
    });
  }

  getPessoas(){
    this.pessoasService.getPessoas().subscribe((pessoas: Pessoas[])=>{
      this.pessoas = pessoas;
    });
  }

  newPessoa(){
    this.router.navigate(['/pessoas/new']);
  }

}
