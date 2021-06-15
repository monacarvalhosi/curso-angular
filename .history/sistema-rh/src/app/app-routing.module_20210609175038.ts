import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { PessoasNewComponent } from './pessoas/pessoas-new/pessoas-new.component';

const routes: Routes = [
  { path: "", component: PessoasListComponent },
  { path: "pessoas/new", component: PessoasNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
