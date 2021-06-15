import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';

const routes: Routes = [
  { path: "", component: PessoasListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
