import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appPunctuated]',
})
export class PunctuatedDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.border = '1px dashed black';
    }
}