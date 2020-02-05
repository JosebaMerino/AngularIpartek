import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar;
  constructor(private element: ElementRef) {
    console.trace('constructor SubrayarDirective');
  }

  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace('SubrayarDirective publiconMouseEnter ');
    this.element.nativeElement.style.color = this.appSubrayar;
    this.element.nativeElement.style.textDecoration = 'underline';
    this.element.nativeElement.class = 'decoracion';
  } // publiconMouseEnter

  @HostListener('mouseleave')
  publiconMouseLeave(){
    console.trace('SubrayarDirective publiconMouseLeave');
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style.textDecoration = 'none';
  } // publiconMouseLeave

}
