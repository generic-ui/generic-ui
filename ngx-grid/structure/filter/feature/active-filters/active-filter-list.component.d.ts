import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { ActiveFilterReadModel } from '../../core/api/active/active-filter.read-model';
import { StructureId } from '../../../core/api/structure.id';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export declare class ActiveFilterListComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandDispatcher;
    activeFilters: Array<ActiveFilterReadModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandDispatcher: FilterCommandInvoker);
    ngOnInit(): void;
    removeFilter(filter: ActiveFilterReadModel): void;
}
