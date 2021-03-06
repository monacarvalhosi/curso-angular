import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IContato } from '../interface/icontato';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  contato = {} as IContato;
  contatos: IContato[] = [];
  flagListaVazia: Boolean = false;

  constructor(private router: Router, private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.getContatos();
  }

  getContatos(){
    this.contatosService.getContatos().subscribe((contatos: IContato[]) =>{
        this.contatos = contatos;
      }
    )
  }

  saveContato(form: NgForm){
    /* id = 1*/
    if(this.contato.id !== undefined){
      this.contatosService.updateContato(this.contato).subscribe(() =>{
          this.cleanForm(form);
        }
      )
    } else {
      this.contatosService.postContato(this.contato).subscribe(() =>{
        this.cleanForm(form);
      })
    }
  }

  deleteContato(contato: IContato){
    this.contatosService.deleteContato(contato).subscribe(()=>{
      this.getContatos();
    })
  }

  editContato(contato: IContato){
    this.contato = {...contato}
  }

  cleanForm(form: NgForm){
    this.getContatos();
    form.resetForm();
    this.contato = {} as IContato;
  }

  VoltarBtn() {
    this.router.navigate(['']);
  }

}
