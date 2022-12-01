import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
import { FieldId } from '../../../../../core/structure/field/src/domain/field/field.id';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FilterWarehouse } from '../../../../../core/structure/filter/src/api/filter.warehouse';
import { UniqueValueModel } from '../../../../../core/structure/filter/src/api/unique/unique-value.model';
import { FilterPublisher } from '../../../../../core/structure/filter/src/api/filter.publisher';
import * as i0 from "@angular/core";
export declare class UniqueValueListComponent extends SmartComponent implements OnInit {
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandInvoker;
    fieldId: FieldId;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    uniqueValues: Array<UniqueValueModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandInvoker: FilterPublisher);
    ngOnInit(): void;
    toggleAllSelect(): void;
    toggleSelect(uniqueValueReadModel: UniqueValueModel): void;
    clearFilters(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UniqueValueListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UniqueValueListComponent, "div[gui-unique-value-list][fieldId]", never, { "fieldId": "fieldId"; }, {}, never, never, false, never>;
}
