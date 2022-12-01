import { ElementRef, OnChanges } from '@angular/core';
import { PagingModel } from '../../../../../../core/structure/paging/src/api/model/paging.model';
import { PagingPublisher } from '../../../../../../core/structure/paging/src/api/paging.publisher';
import { NgChanges } from '../../../../../common/src/cdk/component/lib/src/ng-changes';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class AlternativePagingPagesComponent extends PureComponent implements OnChanges {
    private readonly structureId;
    private readonly pagingCommandService;
    paging: PagingModel;
    sourceSize?: number;
    currentPage: number;
    pages: Array<number>;
    numberOfVisiblePages: number;
    constructor(elRef: ElementRef, structureId: StructureId, pagingCommandService: PagingPublisher);
    ngOnChanges(changes: NgChanges<AlternativePagingPagesComponent>): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    goToPage(pageNumber: number): void;
    calculateVisiblePages(page: number): boolean;
    activePage(page: number): boolean;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlternativePagingPagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlternativePagingPagesComponent, "div[gui-paging-alternative-pages][paging]", never, { "paging": "paging"; "sourceSize": "sourceSize"; }, {}, never, never, false, never>;
}
