import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SelectedRow } from '../../../../source/core/api/formation/selected-row';
import { DynamicallyCreatedComponent } from '../../../../../common/cdk/component/dynamically-created-component';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
export declare class StructureRowDetailViewComponent extends DynamicallyCreatedComponent implements OnInit {
    private readonly item;
    private readonly template;
    private readonly sanitizer;
    selectedRowValue: OriginItemEntity;
    safeHTML: SafeHtml;
    constructor(item: SelectedRow, template: any, sanitizer: DomSanitizer);
    ngOnInit(): void;
}
