import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[HideIt]' })
export class HideItDirective {

  constructor(public el: ElementRef, public renderer: Renderer) {}

  @Input() HideIt: boolean;

  ngOnInit(){

    if(this.HideIt) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}