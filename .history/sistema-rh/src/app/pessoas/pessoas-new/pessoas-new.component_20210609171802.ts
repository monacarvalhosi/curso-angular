import { Component, OnInit } from '@angular/core';
import { Pessoas } from 'src/app/geral/interface/pessoas';

@Component({
  selector: 'app-pessoas-new',
  templateUrl: './pessoas-new.component.html',
  styleUrls: ['./pessoas-new.component.css']
})
export class PessoasNewComponent implements OnInit {

  pessoa = {} as Pessoas;

  constructor() { }

  ngOnInit(): void {
  }

}
