import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { FieldId } from '../../../../../core/structure/field/src/domain/field/field.id';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FilterWarehouse } from '../../../../../core/structure/filter/src/api/filter.warehouse';
import { UniqueValueModel } from '../../../../../core/structure/filter/src/api/unique/unique-value.model';
import { FilterPublisher } from '../../../../../core/structure/filter/src/api/filter.publisher';
import { GuiState } from '../../../../../feature/gui-angular/state/gui.state';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export interface UniqueValueListState {
    fieldId: FieldId;
    uniqueValues: Array<UniqueValueModel>;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
}
export declare class UniqueValueListComponent extends SmartComponent {
    private readonly state;
    private readonly structureId;
    private readonly filterWarehouse;
    private readonly filterCommandInvoker;
    set fieldId(fieldId: FieldId);
    readonly state$: HermesObservable<UniqueValueListState>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, state: GuiState<UniqueValueListState>, structureId: StructureId, filterWarehouse: FilterWarehouse, filterCommandInvoker: FilterPublisher);
    toggleAllSelect(): void;
    toggleSelect(uniqueValueModel: UniqueValueModel): void;
    clearFilters(): void;
    protected getSelectorName(): string;
    private selectUniqueValues;
    private isSelectAllChecked;
    private isSelectAllIndeterminate;
    static ɵfac: i0.ɵɵFactoryDeclaration<UniqueValueListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UniqueValueListComponent, "div[gui-unique-value-list][fieldId]", never, { "fieldId": { "alias": "fieldId"; "required": false; }; }, {}, never, never, false, never>;
}
