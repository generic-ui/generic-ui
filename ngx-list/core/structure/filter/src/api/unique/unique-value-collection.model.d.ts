import { FieldId } from '../../../../field/src/domain/field/field.id';
import { UniqueValueModel } from './unique-value.model';
export declare class UniqueValueCollectionModel {
    private readonly map;
    private readonly allSelected;
    private readonly allDisabled;
    constructor(map: Map<string, Array<UniqueValueModel>>);
    getValues(fieldId: FieldId): Array<UniqueValueModel>;
    areAllSelected(fieldId: FieldId): boolean;
    areAllDisabled(fieldId: FieldId): boolean;
    isSelectAllChecked(fieldId: FieldId): boolean;
    isIndeterminate(fieldId: FieldId): boolean;
    private calculateSelection;
}
