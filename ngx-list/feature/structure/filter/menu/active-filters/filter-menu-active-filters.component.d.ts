import { ElementRef, EventEmitter } from '@angular/core';
import { PureComponent } from '../../../../common/cdk/component/pure-component';
import { ActiveFilterModel } from '../../../../../core/structure/filter/api/active/active-filter.model';
import { FilterId } from '../../../../../core/structure/filter/api/id/filter.id';
import * as i0 from "@angular/core";
export declare class FilterMenuActiveFiltersComponent extends PureComponent {
    activeFilters: Array<ActiveFilterModel>;
    removedFilter: EventEmitter<FilterId>;
    constructor(elementRef: ElementRef);
    remove(filter: ActiveFilterModel): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterMenuActiveFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterMenuActiveFiltersComponent, "div[gui-filter-menu-active-filters][activeFilters]", never, { "activeFilters": "activeFilters"; }, { "removedFilter": "removedFilter"; }, never, never>;
}
