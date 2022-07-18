import { ElementRef } from '@angular/core';
import { SelectOptionsGeometry } from './select-geometry';
export declare class SelectOptionsCords {
    private readonly window;
    private static readonly BORDER_WIDTH;
    private verticalPosition;
    private horizontalPosition;
    private canOpenUpward;
    constructor(element: ElementRef, selectContainerGeometry: SelectOptionsGeometry, window: Window);
    getVerticalPosition(): number;
    getHorizontalPosition(): number;
    getCanOpenUpward(): boolean;
    private calculateCords;
    private calculateDirection;
}
