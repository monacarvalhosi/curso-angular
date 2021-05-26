import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
