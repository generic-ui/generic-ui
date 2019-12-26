import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { Paging } from '../../domain/paging/read/paging';
import { PagingReadModelService } from '../../ui-api/paging/paging-read-model.service';
import { PagingCommandService } from '../../ui-api/paging/paging-command.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
export declare class StructurePagingComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private pagingQueryService;
    private pagingCommandService;
    private sourceQueryService;
    sourceSize: number;
    paging: Paging;
    alternativeDisplay: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, pagingQueryService: PagingReadModelService, pagingCommandService: PagingCommandService, sourceQueryService: SourceReadModelService);
    ngOnInit(): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
