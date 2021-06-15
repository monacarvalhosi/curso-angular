import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaGuard } from './guards/rota.guard';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { PessoasNewComponent } from './pessoas/pessoas-new/pessoas-new.component';
import { PessoasResolver } from './pessoas/resolvers/pessoas.resolver';

const routes: Routes = [
  { path: "",
    component: PessoasListComponent,
    resolve: {
      routeResolver: PessoasResolver,
      canActivate: [RotaGuard]
    }
  },
  {
    path: "pessoas/new",
    component: PessoasNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PessoasResolver]
})
export class AppRoutingModule { }
