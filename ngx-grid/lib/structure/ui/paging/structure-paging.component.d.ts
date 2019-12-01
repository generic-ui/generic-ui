import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { Paging } from '../../domain/paging/query/paging';
import { PagingQueryService } from '../../app/paging/paging-query.service';
import { PagingCommandService } from '../../app/paging/paging-command.service';
import { SourceQueryService } from '../../app/source/source-query.service';
export declare class StructurePagingComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private pagingQueryService;
    private pagingCommandService;
    private sourceQueryService;
    sourceSize: number;
    paging: Paging;
    alternativeDisplay: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, pagingQueryService: PagingQueryService, pagingCommandService: PagingCommandService, sourceQueryService: SourceQueryService);
    ngOnInit(): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
