import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { Indicator } from 'util/fabric/ui/buttons-indicators/indicator';
export declare class FabricButtonComponent extends Indicator {
    link: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
