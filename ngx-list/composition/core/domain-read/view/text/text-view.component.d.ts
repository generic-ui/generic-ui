import { ElementRef, Renderer2 } from '@angular/core';
import { CellValue } from '../../definition/cell-value';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class TextViewComponent extends PureComponent {
    private readonly elementRef;
    private readonly renderer;
    value: CellValue;
    isHtml: boolean;
    constructor(isBold: any, isItalic: any, elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    protected getSelectorName(): string;
}
