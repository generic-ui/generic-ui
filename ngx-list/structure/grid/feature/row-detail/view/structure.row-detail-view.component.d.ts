import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SelectedRow } from '../../../../source/core/api/formation/selected-row';
export declare class StructureRowDetailViewComponent implements OnInit {
    private item;
    private template;
    private readonly sanitizer;
    selectedRowValue: SelectedRow;
    safeHTML: SafeHtml;
    constructor(item: SelectedRow, template: any, sanitizer: DomSanitizer);
    ngOnInit(): void;
}
