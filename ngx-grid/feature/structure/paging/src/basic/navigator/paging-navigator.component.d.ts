import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { PagingModel } from '../../../../../../core/structure/paging/src/api/model/paging.model';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import * as i0 from "@angular/core";
export declare class PagingNavigatorComponent extends PureComponent implements OnChanges {
    paging: PagingModel;
    sourceSize?: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    protected getSelectorName(): string;
    private calculatePrev;
    private calculateNext;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingNavigatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagingNavigatorComponent, "div[gui-paging-navigator][paging]", never, { "paging": "paging"; "sourceSize": "sourceSize"; }, { "nextPageChanged": "nextPageChanged"; "prevPageChanged": "prevPageChanged"; }, never, never, false, never>;
}
