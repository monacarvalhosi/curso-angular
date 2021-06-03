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

@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    PessoasNewComponent,
    PessoasEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DiretivasModule,
    FormsModule
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
