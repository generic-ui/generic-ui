import { ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CellValue } from '../../../../../../core/composition/src/core-read/definition/cell-value';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import * as i0 from "@angular/core";
export declare class FunctionViewComponent extends PureComponent {
    private readonly sanitizer;
    element: CellValue;
    safeHTML: SafeHtml;
    constructor(sanitizer: DomSanitizer, elRef: ElementRef);
    ngOnChanges(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FunctionViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FunctionViewComponent, "gui-function-view", never, { "element": "element"; }, {}, never, never, false, never>;
}
