import { ElementRef, Renderer2 } from '@angular/core';
import { AbstractSpinner } from '../abstract-spinner';
import * as i0 from "@angular/core";
export declare class FabricSpinnerComponent extends AbstractSpinner {
    color: string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabricSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabricSpinnerComponent, "gui-spinner", never, { "color": "color"; }, {}, never, never, false, never>;
}
