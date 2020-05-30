import { FieldFactory } from './data-type/field.factory';
import { FieldId } from './data-type/field.id';
import { TypeField } from './data-type/type.field';
import { FieldConfig } from '../domain-api/field.config';
export declare class FieldCollection {
    private readonly fieldFactory;
    private readonly fields;
    constructor(fieldFactory: FieldFactory);
    getField(fieldId: FieldId): TypeField;
    getAllFieldIds(): Array<string>;
    getAllFields(): Array<TypeField>;
    initFields(fieldConfigs: Array<FieldConfig>): void;
    addFields(fields: Array<TypeField>): void;
    private addField;
}
