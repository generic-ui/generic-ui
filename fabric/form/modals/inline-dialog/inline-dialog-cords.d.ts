import { ElementRef } from '@angular/core';
export declare class InlineDialogCords {
    private element;
    verticalPosition: number;
    horizontalPosition: number;
    constructor(element: ElementRef, pageXOffset: number, pageYOffset: number);
    getVerticalPosition(): number;
    getHorizontalPosition(): number;
    private calculateCords;
}
