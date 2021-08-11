import { ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { Paging } from '../../../core/api/read/paging';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
export declare class AlternativePagingPagesComponent extends SmartComponent implements OnChanges {
    private readonly changeDetectorRef;
    private pagingCommandService;
    paging: Paging;
    sourceSize?: number;
    currentPage: number;
    pages: Array<number>;
    numberOfVisiblePages: number;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, pagingCommandService: PagingCommandInvoker);
    ngOnChanges(changes: NgChanges<AlternativePagingPagesComponent>): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    goToPage(pageNumber: number): void;
    calculateVisiblePages(page: number): boolean;
    activePage(page: number): boolean;
    protected getSelectorName(): string;
}
