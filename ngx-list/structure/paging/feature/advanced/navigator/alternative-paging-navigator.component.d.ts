import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../../core/api/read/paging';
import { PagingCommandInvoker } from '../../../core/api/paging.command-invoker';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class AlternativePagingNavigatorComponent extends PureComponent implements OnChanges {
    private readonly structureId;
    private readonly pagingCommandInvoker;
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(elRef: ElementRef, structureId: StructureId, pagingCommandInvoker: PagingCommandInvoker);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    private calculatePrev;
    private calculateNext;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlternativePagingNavigatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlternativePagingNavigatorComponent, "div[gui-paging-alternative-navigator][paging][sourceSize]", never, { "paging": "paging"; "sourceSize": "sourceSize"; }, { "nextPageChanged": "nextPageChanged"; "prevPageChanged": "prevPageChanged"; }, never, ["*"]>;
}
//# sourceMappingURL=alternative-paging-navigator.component.d.ts.map