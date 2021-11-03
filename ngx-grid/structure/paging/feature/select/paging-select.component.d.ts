import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../core/api/read/paging';
import { GuiSelectOption } from '@generic-ui/fabric';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class PagingSelectComponent extends PureComponent implements OnChanges {
    paging: Paging;
    pageSizeChanged: EventEmitter<any>;
    selectPageSizes: Array<GuiSelectOption>;
    selectPageSize: GuiSelectOption;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<PagingSelectComponent>): void;
    changePageSize(pageSize: GuiSelectOption): void;
    private getSelectPageSizes;
    private getSelectPageSize;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagingSelectComponent, "div[gui-paging-select][paging]", never, { "paging": "paging"; }, { "pageSizeChanged": "pageSizeChanged"; }, never, never>;
}
//# sourceMappingURL=paging-select.component.d.ts.map