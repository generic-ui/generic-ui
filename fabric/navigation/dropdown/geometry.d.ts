import { ElementRef } from '@angular/core';
export declare class Geometry {
    private container;
    private menu;
    private windowSize;
    private containerHeight;
    private containerWidth;
    private availableBottomSpace;
    private availableTopSpace;
    constructor(container: ElementRef, menu: ElementRef, windowSize: number);
    getContainerHeight(): number;
    getContainerWidth(): number;
    canOpenDownward(): boolean;
    canOpenUpward(): boolean;
    private calculate;
}
//# sourceMappingURL=geometry.d.ts.map