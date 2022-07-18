import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SourceWarehouse } from '../../../../core/structure/source/src/api/source.warehouse';
import { SmartComponent } from '../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { ListViewCardTemplate } from './template/list-view.card-template';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
import * as i0 from "@angular/core";
export declare class ListViewContainerCardComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly listCardTemplateArchive;
    items: Array<any>;
    cardTemplate: ListViewCardTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, structureSourceWarehouse: SourceWarehouse, listCardTemplateArchive: ListViewCardTemplateArchive);
    ngOnInit(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewContainerCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListViewContainerCardComponent, "div[gui-list-container-card]", never, {}, {}, never, never, false>;
}
