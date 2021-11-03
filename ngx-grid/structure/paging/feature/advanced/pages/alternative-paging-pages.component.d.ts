import { ElementRef, OnChanges } from '@angular/core';
import { Paging } from '../../../core/api/read/paging';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AlternativePagingPagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlternativePagingPagesComponent, "div[gui-paging-alternative-pages][paging]", never, { "paging": "paging"; "sourceSize": "sourceSize"; }, {}, never, never>;
}
//# sourceMappingURL=alternative-paging-pages.component.d.ts.map