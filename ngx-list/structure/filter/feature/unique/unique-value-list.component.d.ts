import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { UniqueValueModel } from '../../core/api/unique/unique-value.model';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
export declare class UniqueValueListComponent extends SmartComponent implements OnInit {
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandInvoker;
    fieldId: FieldId;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    uniqueValues: Array<UniqueValueModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandInvoker: FilterCommandInvoker);
    ngOnInit(): void;
    toggleAllSelect(): void;
    toggleSelect(uniqueValueReadModel: UniqueValueModel): void;
    clearFilters(): void;
    protected getSelectorName(): string;
}
