import { EventEmitter } from '@angular/core';
import { Paging } from '../../../read/paging/paging';
export declare class StructurePagingSelectComponent {
    paging: Paging;
    pageSizeChanged: EventEmitter<any>;
    changePageSize(pageSize: number): void;
}
