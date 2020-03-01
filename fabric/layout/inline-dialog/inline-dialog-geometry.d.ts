import { ElementRef } from '@angular/core';
export declare class InlineDialogGeometry {
    private inlineDialogRef;
    constructor(inlineDialogRef: ElementRef);
    getHeight(): number;
    getWidth(): number;
}
