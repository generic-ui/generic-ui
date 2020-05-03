import { ElementRef, Renderer2 } from '@angular/core';
import { CellValue } from '../../definition/cell-value';
export declare class TextViewComponent {
    private readonly elementRef;
    private readonly renderer;
    value: CellValue;
    isHtml: boolean;
    constructor(isBold: any, isItalic: any, elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
}
