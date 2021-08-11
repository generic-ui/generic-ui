import { ElementRef, EventEmitter } from '@angular/core';
import { FilterTypeReadModel } from '../../../core/api/type/filter-type.read-model';
import { FilterTypeId } from '../../../core/domain/type/filter-type.id';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class FilterTypeSelectorComponent extends PureComponent {
    filterTypes: Array<FilterTypeReadModel>;
    filterTypeSelected: EventEmitter<FilterTypeId>;
    constructor(elementRef: ElementRef);
    onSelectChange(filterType: FilterTypeReadModel): void;
    protected getSelectorName(): string;
}
