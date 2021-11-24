import { ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CellValue } from '../../definition/cell-value';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class HtmlViewComponent extends PureComponent {
    private readonly sanitizer;
    private readonly elRef;
    element: CellValue;
    safeHTML: SafeHtml;
    constructor(sanitizer: DomSanitizer, elRef: ElementRef);
    ngOnChanges(): void;
    protected getSelectorName(): string;
}
