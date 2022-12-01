import { ElementRef } from '@angular/core';
import { CellValue } from '../../../../../../core/composition/src/core-read/definition/cell-value';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import * as i0 from "@angular/core";
export declare class TextViewComponent extends PureComponent {
    value: CellValue;
    isHtml: boolean;
    constructor(isBold: any, isItalic: any, elementRef: ElementRef);
    ngOnChanges(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextViewComponent, [{ attribute: "bold"; }, { attribute: "italic"; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextViewComponent, "gui-view-text[value]", never, { "value": "value"; }, {}, never, never, false, never>;
}
