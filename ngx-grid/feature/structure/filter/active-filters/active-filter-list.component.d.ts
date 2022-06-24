import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { FilterWarehouse } from '../../../../core/structure/filter/api/filter.warehouse';
import { ActiveFilterModel } from '../../../../core/structure/filter/api/active/active-filter.model';
import { StructureId } from '../../../../core/structure/core/api/global/structure.id';
import { FilterPublisher } from '../../../../core/structure/filter/api/filter.publisher';
import * as i0 from "@angular/core";
export declare class ActiveFilterListComponent extends SmartComponent implements OnInit {
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandDispatcher;
    activeFilters: Array<ActiveFilterModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandDispatcher: FilterPublisher);
    ngOnInit(): void;
    removeFilter(filter: ActiveFilterModel): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFilterListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActiveFilterListComponent, "div[gui-active-filter-list]", never, {}, {}, never, never>;
}
