import { FieldFactory } from './data-type/field.factory';
import { FieldId } from './data-type/field.id';
import { ColumnConfig } from '../../../../../composition/domain/column.config';
import { TypeField } from './data-type/type.field';
export declare class FieldCollection {
    private readonly fieldFactory;
    private readonly fields;
    constructor(fieldFactory: FieldFactory);
    getField(fieldId: FieldId): TypeField;
    getAllFieldIds(): Array<string>;
    getAllFields(): Array<TypeField>;
    initFields(columns: Array<ColumnConfig>): void;
    addFields(fields: Array<TypeField>): void;
    private addField;
}
