import { ElementRef, Renderer2 } from '@angular/core';
import { CellValue } from '../../definition/cell-value';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
export declare class TextViewComponent extends PureComponent {
    private readonly elementRef;
    private readonly renderer;
    value: CellValue;
    isHtml: boolean;
    constructor(isBold: any, isItalic: any, elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextViewComponent, [{ attribute: "bold"; }, { attribute: "italic"; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextViewComponent, "gui-view-text[value]", never, { "value": "value"; }, {}, never, never>;
}
//# sourceMappingURL=text-view.component.d.ts.map