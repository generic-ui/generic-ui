import { ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SelectedRow } from '../../../../../core/structure/formation/src/api/row-selected/selected-row';
import { DynamicallyCreatedComponent } from '../../../../../feature/common/src/cdk/component/lib/src/dynamically-created-component';
import { ItemEntity } from '../../../../../core/structure/source/src/domain/item/item.entity';
import * as i0 from "@angular/core";
export declare class StructureRowDetailViewComponent extends DynamicallyCreatedComponent implements OnInit {
    private readonly item;
    private readonly template;
    private readonly sanitizer;
    selectedRowValue: ItemEntity;
    safeHTML: SafeHtml;
    constructor(elRef: ElementRef, item: SelectedRow, template: any, sanitizer: DomSanitizer);
    ngOnInit(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowDetailViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureRowDetailViewComponent, "div[gui-row-detail]", never, {}, {}, never, never, false, never>;
}
