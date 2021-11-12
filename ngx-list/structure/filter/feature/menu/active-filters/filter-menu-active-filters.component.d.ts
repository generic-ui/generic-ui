import { ElementRef, EventEmitter } from '@angular/core';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { ActiveFilterReadModel } from '../../../core/api/active/active-filter.read-model';
import { FilterId } from '../../../core/api/filter.id';
export declare class FilterMenuActiveFiltersComponent extends PureComponent {
    activeFilters: Array<ActiveFilterReadModel>;
    removedFilter: EventEmitter<FilterId>;
    constructor(elementRef: ElementRef);
    remove(filter: ActiveFilterReadModel): void;
    protected getSelectorName(): string;
}
