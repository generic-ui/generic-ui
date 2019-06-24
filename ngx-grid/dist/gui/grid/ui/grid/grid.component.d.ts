import { ElementRef } from '@angular/core';
declare var StructureBase: any
export declare const gridSelector = "gui-grid";
export declare class GridComponent extends StructureBase {
    private elementRef;
    structureRef: any;
    constructor(elementRef: ElementRef);
    getElementRef(): ElementRef;
}
