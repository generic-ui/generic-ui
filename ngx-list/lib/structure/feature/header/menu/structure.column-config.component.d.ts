import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
import { StructureColumnMenuConfig } from './config/structure.column-menu-config';
import { FilterWarehouse } from '../../../../../structure/filter/domain-api/filter.warehouse';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureColumnConfigComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureCommandService;
    private readonly compositionReadModelService;
    private readonly filterWarehouse;
    private readonly structureColumnMenuConfigArchive;
    readonly column: CellTemplateWithContext;
    headerSortMenu: ElementRef;
    config: StructureColumnMenuConfig;
    uniqueValues: Array<any>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureCommandService: StructureCommandDispatcher, compositionReadModelService: CompositionWarehouse, filterWarehouse: FilterWarehouse, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, column: CellTemplateWithContext);
    ngOnInit(): void;
    isEnabled(): boolean;
}
