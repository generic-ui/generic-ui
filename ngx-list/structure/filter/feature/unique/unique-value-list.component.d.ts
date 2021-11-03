import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { FieldId } from '../../../field/core/domain/field/field.id';
import { StructureId } from '../../../core/api/structure.id';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { UniqueValueReadModel } from '../../core/api/unique/unique-value.read-model';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
import * as i0 from "@angular/core";
export declare class UniqueValueListComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandInvoker;
    fieldId: FieldId;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    uniqueValues: Array<UniqueValueReadModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandInvoker: FilterCommandInvoker);
    ngOnInit(): void;
    toggleAllSelect(): void;
    toggleSelect(uniqueValueReadModel: UniqueValueReadModel): void;
    clearFilters(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UniqueValueListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UniqueValueListComponent, "div[gui-unique-value-list][fieldId]", never, { "fieldId": "fieldId"; }, {}, never, never>;
}
//# sourceMappingURL=unique-value-list.component.d.ts.map