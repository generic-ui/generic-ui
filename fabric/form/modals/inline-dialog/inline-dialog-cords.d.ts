import { ElementRef } from '@angular/core';
export declare class InlineDialogCords {
    private element;
    verticalPosition: number;
    horizontalPosition: number;
    constructor(element: ElementRef);
    private calculateCords;
    getVerticalPosition(): number;
    getHorizontalPosition(): number;
}
