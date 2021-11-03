import { ElementRef } from '@angular/core';
export declare abstract class FabricGeometry {
    private elementRef;
    private containerClassName;
    protected constructor(elementRef: ElementRef, containerClassName: string);
    protected getHeight(): number;
    protected getWidth(): number;
}
