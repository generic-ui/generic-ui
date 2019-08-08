import { ElementRef } from '@angular/core';
import { GridGateway } from './grid-gateway';
export declare const gridSelector = "gui-grid";
export declare class GridComponent extends GridGateway {
    private elementRef;
    structureRef: any;
    constructor(elementRef: ElementRef);
    getElementRef(): ElementRef;
}
