import { ElementRef } from '@angular/core';
import { InlineDialogPlacement } from './placement';
export declare class InlineDialogCords {
    private element;
    private placement?;
    private inlineDialogOffset;
    verticalPosition: number;
    horizontalPosition: number;
    private static defaultInlineDialogOffset;
    constructor(element: ElementRef, pageXOffset: number, pageYOffset: number, placement?: InlineDialogPlacement, inlineDialogOffset?: number);
    getVerticalPosition(): number;
    getHorizontalPosition(): number;
    private calculateCords;
}
