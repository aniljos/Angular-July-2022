import { Directive, ElementRef, HostListener, Input } from '@angular/core';


// <div appHighlight></div>
// <div appHighlight="blue"></div>
// Every element in angular is accessed by ElementRef
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  @Input() public appHighlight: string = "";

  constructor(private elementRef: ElementRef) {
    
      //elementRef.nativeElement.style.backgroundColor = "yellow";
   }


   @HostListener('mouseenter')
   mouseenter(){
      this.elementRef.nativeElement.style.backgroundColor = this.appHighlight || 'yellow';
   }

   @HostListener('mouseleave')
   mouseleave(){
      this.elementRef.nativeElement.style.backgroundColor = "white";
   }

}
