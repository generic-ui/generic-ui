import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { Paging } from '../../read/paging/paging';
import { StructurePagingReadModelWarehouse } from '../../ui-api/paging/structure-paging.read-model-warehouse';
import { StructurePagingCommandDispatcher } from '../../ui-api/paging/structure-paging.command-dispatcher';
import { StructureSourceReadModelWarehouse } from '../../ui-api/source/structure-source.read-model-warehouse';
import { StructurePagingDisplayModeArchive } from './mode/structure-paging.display-mode.archive';
export declare class StructurePagingComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private pagingReadModelService;
    private pagingCommandService;
    private sourceReadModelService;
    private structurePagingDisplayModeArchive;
    sourceSize: number;
    paging: Paging;
    alternativeDisplay: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, pagingReadModelService: StructurePagingReadModelWarehouse, pagingCommandService: StructurePagingCommandDispatcher, sourceReadModelService: StructureSourceReadModelWarehouse, structurePagingDisplayModeArchive: StructurePagingDisplayModeArchive);
    ngOnInit(): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
