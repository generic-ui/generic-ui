import { ColumnFieldId } from '../column/field/column-field.id';
export declare class ChangeSortParams {
    readonly fieldId: ColumnFieldId;
    readonly direction: boolean;
    constructor(fieldId: ColumnFieldId, direction: boolean);
}
