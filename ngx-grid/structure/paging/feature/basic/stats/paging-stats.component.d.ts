import { ElementRef, OnChanges } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { Paging } from '../../../core/api/read/paging';
import * as i0 from "@angular/core";
export declare class PagingStatsComponent extends PureComponent implements OnChanges {
    paging: Paging;
    sourceSize: number;
    firstItemIndex: number;
    lastItemIndex: number;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    calculate(): void;
    isSourceNotEmpty(): boolean;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingStatsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagingStatsComponent, "div[gui-paging-stats][paging]", never, { "paging": "paging"; }, {}, never, never>;
}
//# sourceMappingURL=paging-stats.component.d.ts.map