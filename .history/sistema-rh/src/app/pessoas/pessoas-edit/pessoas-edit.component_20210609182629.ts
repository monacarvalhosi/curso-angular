import { Component, Input, OnInit } from '@angular/core';
import { Pessoas } from 'src/app/geral/interface/pessoas';

@Component({
  selector: 'app-pessoas-edit',
  templateUrl: './pessoas-edit.component.html',
  styleUrls: ['./pessoas-edit.component.css']
})
export class PessoasEditComponent implements OnInit {

  @Input() editPessoa = {} as Pessoas;

  constructor() { }

  ngOnInit(): void {
  }

}
