import { ChangeDetectorRef, OnInit } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ListViewCardTemplate } from './template/list-view.card-template';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
export declare class ListViewContainerCardComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly listCardTemplateArchive;
    items: Array<any>;
    cardTemplate: ListViewCardTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureSourceWarehouse: StructureSourceWarehouse, listCardTemplateArchive: ListViewCardTemplateArchive);
    ngOnInit(): void;
}
