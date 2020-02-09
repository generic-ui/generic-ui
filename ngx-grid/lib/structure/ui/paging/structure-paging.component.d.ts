import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { Paging } from '../../domain/paging/read/paging';
import { PagingReadModelService } from '../../ui-api/paging/paging-read-model.service';
import { PagingCommandService } from '../../ui-api/paging/paging-command.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
import { StructurePagingDisplayModeArchive } from './mode/structure-paging.display-mode.archive';
export declare class StructurePagingComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private pagingQueryService;
    private pagingCommandService;
    private sourceQueryService;
    private structurePagingDisplayModeArchive;
    sourceSize: number;
    paging: Paging;
    alternativeDisplay: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, pagingQueryService: PagingReadModelService, pagingCommandService: PagingCommandService, sourceQueryService: SourceReadModelService, structurePagingDisplayModeArchive: StructurePagingDisplayModeArchive);
    ngOnInit(): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
