import { FieldId } from '../../../../field/core/domain/field/field.id';
import { UniqueValueReadModel } from './unique-value.read-model';
export declare class UniqueValuesReadModel {
    private readonly map;
    private readonly allSelected;
    private readonly allDisabled;
    constructor(map: Map<string, Array<UniqueValueReadModel>>);
    getValues(fieldId: FieldId): Array<UniqueValueReadModel>;
    areAllSelected(fieldId: FieldId): boolean;
    areAllDisabled(fieldId: FieldId): boolean;
    isSelectAllChecked(fieldId: FieldId): boolean;
    isIndeterminate(fieldId: FieldId): boolean;
    private calculateSelection;
}
//# sourceMappingURL=unique-values.read-model.d.ts.map