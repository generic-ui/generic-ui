import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SelectedRow } from '../../../../source/core/api/formation/selected-row';
import { DynamicallyCreatedComponent } from '../../../../../common/cdk/component/dynamically-created-component';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
import * as i0 from "@angular/core";
export declare class StructureRowDetailViewComponent extends DynamicallyCreatedComponent implements OnInit {
    private readonly item;
    private readonly template;
    private readonly sanitizer;
    selectedRowValue: OriginItemEntity;
    safeHTML: SafeHtml;
    constructor(item: SelectedRow, template: any, sanitizer: DomSanitizer);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowDetailViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureRowDetailViewComponent, "div[gui-row-detail]", never, {}, {}, never, never>;
}
//# sourceMappingURL=structure.row-detail-view.component.d.ts.map