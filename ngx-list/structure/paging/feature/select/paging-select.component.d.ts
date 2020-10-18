import { EventEmitter } from '@angular/core';
import { Paging } from '../../core/api/read/paging';
export declare class PagingSelectComponent {
    paging: Paging;
    pageSizeChanged: EventEmitter<any>;
    changePageSize(pageSize: number): void;
}
