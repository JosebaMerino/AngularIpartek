import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
selector: '[appAutoGrow]'
})
export class AutoGrowDirective {

constructor(public element: ElementRef) {
  this.adjustCustom();
}
@Input() maximumHeight: number; // based on pixel
@Input() minHeight: number; // based on pixel
@HostListener('input', ['$event.target'])
@HostListener('cut', ['$event.target'])
@HostListener('paste', ['$event.target'])
@HostListener('change', ['$event.target'])

ngOnInit(): void {
    this.adjustCustom();
}

adjustCustom(): void {
    const element = this.element.nativeElement;
    element.style.height = this.minHeight + 'px';
    element.style.height = (element.scrollHeight) + 'px';
    if (element.scrollHeight <= this.maximumHeight) {

        element.style.overflowY = 'hidden';
        delete element.style.maxHeight;
    } else {

        element.style.overflowY = 'scroll'
        element.style.maxHeight = this.maximumHeight + 'px';
    }

}
}
