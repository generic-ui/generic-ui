import { ElementRef } from '@angular/core';
import { GridGateway } from './grid-gateway';
import { GridColumnConverter } from './grid.column.converter';
export declare const gridSelector = "gui-grid";
export declare class GridComponent extends GridGateway {
    private elementRef;
    structureRef: any;
    constructor(elementRef: ElementRef, gridColumnConverter: GridColumnConverter);
    getElementRef(): ElementRef;
}
