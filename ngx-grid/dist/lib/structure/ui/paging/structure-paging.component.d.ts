import { ChangeDetectorRef, OnInit } from '@angular/core';
import { OriginQueryService } from 'structure/app/origin/origin-query.service';
import { PagingCommandService } from 'structure/app/paging/paging-command.service';
import { PagingQueryService } from 'structure/app/paging/paging-query.service';
import { Paging } from 'structure/domain/paging/query/paging';
import { SmartComponent } from 'util/cdk/smart-component';
export declare class StructurePagingComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private pagingQueryService;
    private pagingCommandService;
    private originQueryService;
    sourceSize: number;
    paging: Paging;
    constructor(changeDetectorRef: ChangeDetectorRef, pagingQueryService: PagingQueryService, pagingCommandService: PagingCommandService, originQueryService: OriginQueryService);
    ngOnInit(): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
