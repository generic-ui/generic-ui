import { EventEmitter } from '@angular/core';
import { Paging } from '../../../domain/paging/read/paging';
export declare class StructurePagingSelectComponent {
    paging: Paging;
    pageSizeChanged: EventEmitter<any>;
    changePageSize(pageSize: number): void;
}
