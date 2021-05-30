import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { appRoutes } from './rotas/app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NewRodapeComponent } from './new-rodape/new-rodape.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ContatosService } from './services/contatos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    RodapeComponent,
    NewRodapeComponent,
    ContatoListComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
