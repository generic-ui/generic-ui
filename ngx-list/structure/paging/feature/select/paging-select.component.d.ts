import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { PagingModel } from '../../core/api/paging.model';
import { GuiSelectOption } from '@generic-ui/fabric';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
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
}
