import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string = '';
  editPessoa = {} as Pessoas;

  constructor(private router: Router,
    private pessoasService: PessoasService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pessoasService.getPessoas().subscribe((pessoas: Pessoas[])=>{
      this.pessoas = pessoas;
    });
  }

  open(content: any, value: Pessoas){
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).
      result.then((result)=>{
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      this.emitPessoa(value);
  }

  emitPessoa(value: Pessoas){
    this.editPessoa = value;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
