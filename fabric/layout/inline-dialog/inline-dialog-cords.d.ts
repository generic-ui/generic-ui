import { ElementRef } from '@angular/core';
import { InlineDialogPlacement } from './placement';
import { InlineDialogGeometry } from './inline-dialog-geometry';
export declare class InlineDialogCords {
    private element;
    private inlineDialogGeometry;
    private window;
    private placement?;
    private inlineDialogOffset;
    verticalPosition: number;
    horizontalPosition: number;
    private static defaultInlineDialogOffset;
    constructor(element: ElementRef, inlineDialogGeometry: InlineDialogGeometry, window: Window, placement?: InlineDialogPlacement, inlineDialogOffset?: number);
    getVerticalPosition(): number;
    getHorizontalPosition(): number;
    private calculateCords;
    private calculateDirection;
}
