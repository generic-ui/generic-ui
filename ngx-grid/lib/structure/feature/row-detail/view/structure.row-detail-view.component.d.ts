import { OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
export declare class StructureRowDetailViewComponent implements OnInit {
    private item;
    private template;
    private readonly sanitizer;
    selectedRowValues: Array<any>;
    safeHTML: SafeHtml;
    constructor(item: any, template: any, sanitizer: DomSanitizer);
    ngOnInit(): void;
}
