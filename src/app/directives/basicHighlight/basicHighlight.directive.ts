import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor = 'pink';
    }

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.elementRef.nativeElement.style.backgroundColor = 'pink';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    }
}