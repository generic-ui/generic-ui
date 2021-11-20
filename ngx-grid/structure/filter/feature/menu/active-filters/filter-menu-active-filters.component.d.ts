import { ElementRef, EventEmitter } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ActiveFilterModel } from '../../../core/api/active/active-filter.model';
import { FilterId } from '../../../core/api/filter.id';
export declare class FilterMenuActiveFiltersComponent extends PureComponent {
    activeFilters: Array<ActiveFilterModel>;
    removedFilter: EventEmitter<FilterId>;
    constructor(elementRef: ElementRef);
    remove(filter: ActiveFilterModel): void;
    protected getSelectorName(): string;
}
