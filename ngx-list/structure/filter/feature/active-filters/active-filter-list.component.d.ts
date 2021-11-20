import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { ActiveFilterModel } from '../../core/api/active/active-filter.model';
import { StructureId } from '../../../core/api/structure.id';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export declare class ActiveFilterListComponent extends SmartComponent implements OnInit {
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandDispatcher;
    activeFilters: Array<ActiveFilterModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandDispatcher: FilterCommandInvoker);
    ngOnInit(): void;
    removeFilter(filter: ActiveFilterModel): void;
    protected getSelectorName(): string;
}
