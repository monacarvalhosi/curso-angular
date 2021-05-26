import { Routes } from '@angular/router'
import { ContatoListComponent } from '../contato-list/contato-list.component'
import { ErrorComponent } from '../error/error.component'
import { HomeComponent } from '../home/home.component'

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contatos", component: ContatoListComponent },
  { path: "**", component: ErrorComponent }
]
