import { FieldId } from './field/field.id';
import { Field } from './field/field';
import { FieldConfig } from '../api/field.config';
import { FieldFactory } from './field/field.factory';
export declare class FieldCollection {
    private readonly fieldFactory;
    private readonly fields;
    constructor(fieldFactory: FieldFactory);
    getField(fieldId: FieldId): Field;
    getAllFieldIds(): Array<string>;
    getAllFields(): Array<Field>;
    getFieldsAsMap(): Map<string, Field>;
    initFields(fieldConfigs: Array<FieldConfig>): void;
    addFields(fields: Array<Field>): void;
    private addField;
    private clear;
}
