import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGrifarTexto]'
})
export class GrifarTextoDirective implements OnInit{

  @Input() corBackground: string = 'yellow';
  @Input() corText: string = 'white';

  constructor(public _elemento: ElementRef) { }

  ngOnInit(){
    this.mudarFundo();
  }

  public mudarFundo(cor: string = 'yellow'){
    this._elemento.nativeElement.style.backgroundColor = this.corBackground;
    this._elemento.nativeElement.style.color = this.corText;
    this._elemento.nativeElement.style.fontWeight = 'bolder';
  }
}
