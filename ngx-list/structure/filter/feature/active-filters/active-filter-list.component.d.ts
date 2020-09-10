import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { ActiveFilterReadModel } from '../../domain-api/active/active-filter.read-model';
import { StructureId } from '../../../core/domain/structure.id';
import { FilterCommandInvoker } from '../../domain-api/filter.command-invoker';
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
