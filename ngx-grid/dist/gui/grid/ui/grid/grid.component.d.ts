import { ElementRef } from '@angular/core';
import { GridBase } from './grid-base';
export declare const gridSelector = "gui-grid";
export declare class GridComponent extends GridBase {
    private elementRef;
    structureRef: any;
    constructor(elementRef: ElementRef);
    getElementRef(): ElementRef;
}
