import { Field } from './data-type/field';
import { FieldFactory } from './data-type/field.factory';
import { FieldId } from './data-type/field.id';
import { ColumnConfig } from '../../../composition/column.config';
export declare class FieldCollection {
    private readonly fieldFactory;
    private readonly fields;
    constructor(fieldFactory: FieldFactory);
    getField(fieldId: FieldId): Field;
    getAllFieldIds(): Array<string>;
    getAllFields(): Array<Field>;
    initFields(columns: Array<ColumnConfig>): void;
    addFields(fields: Array<Field>): void;
    private addField;
}
