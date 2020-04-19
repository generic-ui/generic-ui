import { OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
export declare class StructureDetailViewComponent implements OnInit {
    private item;
    private temp;
    private readonly sanitizer;
    selectedRowValues: Array<any>;
    safeHTML: SafeHtml;
    constructor(item: any, temp: any, sanitizer: DomSanitizer);
    ngOnInit(): void;
}
