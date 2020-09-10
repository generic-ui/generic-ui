import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SourceWarehouse } from '../../../source/domain-api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../core/domain/structure.id';
import { ListViewCardTemplate } from './template/list-view.card-template';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
export declare class ListViewContainerCardComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly listCardTemplateArchive;
    items: Array<any>;
    cardTemplate: ListViewCardTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureSourceWarehouse: SourceWarehouse, listCardTemplateArchive: ListViewCardTemplateArchive);
    ngOnInit(): void;
}
