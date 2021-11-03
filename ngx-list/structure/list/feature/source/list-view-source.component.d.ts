import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewTemplate } from './template/list-view-template';
import { ListViewTemplateArchive } from './template/list-view-template.archive';
import * as i0 from "@angular/core";
export declare class ListViewSourceComponent extends SmartComponent implements OnInit, OnDestroy {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly containerTemplateArchive;
    source: Array<any>;
    template: ListViewTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, structureSourceWarehouse: SourceWarehouse, containerTemplateArchive: ListViewTemplateArchive);
    ngOnInit(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSourceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewSourceComponent, "div[gui-list-view-source]", never, {}, {}, never, never>;
}
//# sourceMappingURL=list-view-source.component.d.ts.map