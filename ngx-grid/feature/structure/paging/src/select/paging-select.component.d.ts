import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { PagingModel } from '../../../../../core/structure/paging/src/api/model/paging.model';
import { GuiSelectOption } from '@generic-ui/fabric';
import { PureComponent } from '../../../../common/component/src/pure-component';
import { NgChanges } from '../../../../common/component/src/ng-changes';
import * as i0 from "@angular/core";
export declare class PagingSelectComponent extends PureComponent implements OnChanges {
    paging: PagingModel;
    pageSizeChanged: EventEmitter<any>;
    selectPageSizes: Array<GuiSelectOption>;
    selectPageSize: GuiSelectOption;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<PagingSelectComponent>): void;
    changePageSize(pageSize: GuiSelectOption): void;
    protected getSelectorName(): string;
    private getSelectPageSizes;
    private getSelectPageSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagingSelectComponent, "div[gui-paging-select][paging]", never, { "paging": { "alias": "paging"; "required": false; }; }, { "pageSizeChanged": "pageSizeChanged"; }, never, never, false, never>;
}
