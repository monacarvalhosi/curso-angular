import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrifarTextoDirective } from './grifar-texto.directive';

@NgModule({
  declarations: [
    GrifarTextoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GrifarTextoDirective
  ]
})
export class DiretivasModule { }
