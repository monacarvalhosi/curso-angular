import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RotaGuard implements CanActivate{
  canActivate(){
    return false;
  }
}
