import { EventEmitter } from '@angular/core';
import { Column } from 'structure/domain/presentation/column';
import { PagingConfig } from 'structure/domain/paging/paging-config';
export declare abstract class StructureBase {
    /**
     * INPUTS
     */
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    height: number;
    width: number;
    autoResizeWidth: boolean;
    source: Array<any>;
    columns: Array<Column>;
    paging: boolean | PagingConfig;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: string;
    rowColoring: string;
    /**
     * OUTPUTS
     */
    pageChanged: EventEmitter<number>;
    onPageChange(page: number): void;
}
