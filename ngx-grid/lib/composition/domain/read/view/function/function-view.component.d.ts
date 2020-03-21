import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class FunctionViewComponent {
    private sanitizer;
    element: any;
    safeHTML: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnChanges(): void;
}
