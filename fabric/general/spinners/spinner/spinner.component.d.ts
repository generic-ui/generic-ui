import { ElementRef, Renderer2 } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
export declare class FabricSpinnerComponent extends AbstractSpinner {
    color: string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
