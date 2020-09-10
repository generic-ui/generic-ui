import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CellValue } from '../../definition/cell-value';
export declare class FunctionViewComponent {
    private sanitizer;
    element: CellValue;
    safeHTML: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnChanges(): void;
}
