import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewTemplate } from './template/list-view-template';
import { ListViewTemplateArchive } from './template/list-view-template.archive';
export declare class ListViewSourceComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly containerTemplateArchive;
    source: Array<any>;
    template: ListViewTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureSourceWarehouse: SourceWarehouse, containerTemplateArchive: ListViewTemplateArchive);
    ngOnInit(): void;
}
