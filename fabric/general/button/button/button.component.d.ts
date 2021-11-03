import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { Indicator } from '../../indicator';
export declare class FabricButtonComponent extends Indicator {
    link: boolean;
    text: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
