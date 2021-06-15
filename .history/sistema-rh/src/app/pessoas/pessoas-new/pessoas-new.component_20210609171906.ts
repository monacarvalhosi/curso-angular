import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoas } from 'src/app/geral/interface/pessoas';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoas-new',
  templateUrl: './pessoas-new.component.html',
  styleUrls: ['./pessoas-new.component.css']
})
export class PessoasNewComponent implements OnInit {

  pessoa = {} as Pessoas;

  constructor(private router: Router, private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }

}
