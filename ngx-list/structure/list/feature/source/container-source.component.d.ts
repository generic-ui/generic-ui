import { ChangeDetectorRef, OnInit } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ContainerTemplate } from './template/container-template';
import { ContainerTemplateArchive } from './template/container-template.archive';
export declare class ContainerSourceComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly containerTemplateArchive;
    source: Array<any>;
    template: ContainerTemplate;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureSourceWarehouse: StructureSourceWarehouse, containerTemplateArchive: ContainerTemplateArchive);
    ngOnInit(): void;
}
