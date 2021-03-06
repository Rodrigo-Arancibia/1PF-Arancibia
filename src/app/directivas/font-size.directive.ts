import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.fontSize = '20px';
  }

}
