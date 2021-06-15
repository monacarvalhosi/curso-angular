import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { PessoasNewComponent } from './pessoas/pessoas-new/pessoas-new.component';
import { PessoasEditComponent } from './pessoas/pessoas-edit/pessoas-edit.component';
import { PessoasService } from './pessoas/services/pessoas.service';
import { DiretivasModule } from './geral/diretivas/diretivas.module';
import { FormsModule } from '@angular/forms';
import { FilterSearchPipe } from './geral/pipes/filter-search.pipe';
import { CpfPipe } from './geral/pipes/cpf.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    PessoasNewComponent,
    PessoasEditComponent,
    FilterSearchPipe,
    CpfPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DiretivasModule,
    FormsModule,
    NgbModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
