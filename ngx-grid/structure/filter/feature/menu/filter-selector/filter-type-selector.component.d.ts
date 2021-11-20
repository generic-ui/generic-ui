import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { FilterTypeModel } from '../../../core/api/type/filter-type.model';
import { FilterTypeId } from '../../../core/domain/type/filter-type.id';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { GuiSelectOption } from '@generic-ui/fabric';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class FilterTypeSelectorComponent extends PureComponent implements OnChanges {
    filterTypes: ReadonlyArray<FilterTypeModel>;
    filterTypeSelected: EventEmitter<FilterTypeId>;
    filterTypesAsOptions: ReadonlyArray<GuiSelectOption>;
    disabled: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<FilterTypeSelectorComponent>): void;
    onSelectChange(option: GuiSelectOption): void;
    protected getSelectorName(): string;
}
