import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { Paging } from '../../feature-api/paging/read/paging';
import { StructurePagingWarehouse } from '../../feature-api/paging/structure-paging.warehouse';
import { StructurePagingCommandDispatcher } from '../../feature-api/paging/structure-paging.command-dispatcher';
import { StructureSourceWarehouse } from '../../feature-api/source/structure-source.warehouse';
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
    constructor(changeDetectorRef: ChangeDetectorRef, pagingReadModelService: StructurePagingWarehouse, pagingCommandService: StructurePagingCommandDispatcher, sourceReadModelService: StructureSourceWarehouse, structurePagingDisplayModeArchive: StructurePagingDisplayModeArchive);
    ngOnInit(): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
