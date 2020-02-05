import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar;
  colorAnterior: string;
  constructor(private element: ElementRef) {
    console.trace('constructor SubrayarDirective');
    this.colorAnterior = '';
  }

  @HostListener('mouseenter')
  publiconMouseEnter() {
    console.trace('SubrayarDirective publiconMouseEnter ');
    this.colorAnterior = this.element.nativeElement.style.color;
    this.element.nativeElement.style.color = this.appSubrayar;
    this.element.nativeElement.style.textDecoration = 'underline';
  } // publiconMouseEnter

  @HostListener('mouseleave')
  publiconMouseLeave() {
    console.trace('SubrayarDirective publiconMouseLeave');
    this.element.nativeElement.style.color = this.colorAnterior;
    this.element.nativeElement.style.textDecoration = 'none';
  } // publiconMouseLeave

}
