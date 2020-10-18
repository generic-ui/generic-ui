import { ChangeDetectorRef } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { UniqueValueReadModel } from '../../core/api/unique/unique-value.read-model';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export declare class UniqueValueListComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandDispatcher;
    fieldId: FieldId;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    uniqueValues: Array<UniqueValueReadModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandDispatcher: FilterCommandInvoker);
    ngOnInit(): void;
    toggleAllSelect(): void;
    toggleSelect(uniqueValueReadModel: UniqueValueReadModel): void;
    clearFilters(): void;
}
