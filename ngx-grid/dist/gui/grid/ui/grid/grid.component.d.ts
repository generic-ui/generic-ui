import { ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { GridGateway } from './grid-gateway';
import { GridIdGenerator } from './register/grid-id.generator';
import { GridRegister } from './register/grid.register';
export declare const gridSelector = "gui-grid";
export declare class GridComponent extends GridGateway implements OnInit {
    private elementRef;
    private changeDetectorRef;
    private gridRegister;
    private gridIdGenerator;
    structureRef: any;
    gridId: string;
    private localGridId;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, gridRegister: GridRegister, gridIdGenerator: GridIdGenerator);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getElementRef(): ElementRef;
    getGridId(): string;
    detectChanges(): void;
    private exposeGridId;
}
