import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { PagingModel } from '../../../../../../core/structure/paging/src/api/model/paging.model';
import { PagingPublisher } from '../../../../../../core/structure/paging/src/api/paging.publisher';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class AlternativePagingNavigatorComponent extends PureComponent implements OnChanges {
    private readonly structureId;
    private readonly pagingCommandInvoker;
    paging: PagingModel;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(elRef: ElementRef, structureId: StructureId, pagingCommandInvoker: PagingPublisher);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    protected getSelectorName(): string;
    private calculatePrev;
    private calculateNext;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlternativePagingNavigatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlternativePagingNavigatorComponent, "div[gui-paging-alternative-navigator][paging][sourceSize]", never, { "paging": "paging"; "sourceSize": "sourceSize"; }, { "nextPageChanged": "nextPageChanged"; "prevPageChanged": "prevPageChanged"; }, never, ["*"], false, never>;
}
