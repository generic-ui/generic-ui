import { ElementRef, Renderer2 } from '@angular/core';
import { AbstractSpinner } from 'util/fabric/ui/spinners/abstract-spinner';
export declare class FabricSpinnerComponent extends AbstractSpinner {
    color: string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
