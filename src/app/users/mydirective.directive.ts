import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private ele: ElementRef) {
    ele.nativeElement.style.background='green';
    ele.nativeElement.style.color='white'
   }

}
