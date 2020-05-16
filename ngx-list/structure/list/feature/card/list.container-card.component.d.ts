import { ChangeDetectorRef, OnInit } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ListCardTemplate } from './template/list.card-template';
import { ListCardTemplateArchive } from './template/list.card-template.archive';
export declare class ListContainerCardComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly listCardTemplateArchive;
    items: Array<any>;
    cardTemplate: ListCardTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureSourceWarehouse: StructureSourceWarehouse, listCardTemplateArchive: ListCardTemplateArchive);
    ngOnInit(): void;
}
