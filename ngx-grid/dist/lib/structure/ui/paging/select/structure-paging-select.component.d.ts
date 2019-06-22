import { EventEmitter } from '@angular/core';
import { Paging } from 'structure/domain/paging/query/paging';
export declare class StructurePagingSelectComponent {
    paging: Paging;
    pageSizeChanged: EventEmitter<{}>;
    changePageSize(pageSize: number): void;
}
