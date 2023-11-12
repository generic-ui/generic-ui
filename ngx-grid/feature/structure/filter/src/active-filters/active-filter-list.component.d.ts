import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { ActiveFilterModel } from '../../../../../core/structure/filter/src/api/active/active-filter.model';
import { FilterPublisher } from '../../../../../core/structure/filter/src/api/filter.publisher';
import * as i0 from "@angular/core";
export declare class ActiveFilterListComponent extends SmartComponent {
    private readonly filterCommandDispatcher;
    private readonly structureId;
    private readonly filterWarehouse;
    readonly activeFilters$: import("@generic-ui/hermes").HermesObservable<readonly ActiveFilterModel[]>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, filterCommandDispatcher: FilterPublisher);
    removeFilter(filter: ActiveFilterModel): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFilterListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActiveFilterListComponent, "div[gui-active-filter-list]", never, {}, {}, never, never, false, never>;
}
