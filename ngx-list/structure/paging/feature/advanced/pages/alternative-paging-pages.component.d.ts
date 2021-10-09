import { ElementRef, OnChanges } from '@angular/core';
import { Paging } from '../../../core/api/read/paging';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { StructureId } from '../../../../core/api/structure.id';
export declare class AlternativePagingPagesComponent extends PureComponent implements OnChanges {
    private readonly structureId;
    private readonly pagingCommandService;
    paging: Paging;
    sourceSize?: number;
    currentPage: number;
    pages: Array<number>;
    numberOfVisiblePages: number;
    constructor(elRef: ElementRef, structureId: StructureId, pagingCommandService: PagingCommandInvoker);
    ngOnChanges(changes: NgChanges<AlternativePagingPagesComponent>): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    goToPage(pageNumber: number): void;
    calculateVisiblePages(page: number): boolean;
    activePage(page: number): boolean;
    protected getSelectorName(): string;
}
