import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appMouseEditMode]'
})
export class MouseEditModeDirective {

span: ElementRef;
  constructor(span: ElementRef) {
    this.span = span;
   }

@HostListener('mouseenter') onMouseEnter() {
    
}

@HostListener('mouseleave') onMouseLeave() {
    
}


}
