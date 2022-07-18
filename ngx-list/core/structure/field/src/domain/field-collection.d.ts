import { FieldId } from './field/field.id';
import { FieldEntity } from './field/field.entity';
import { FieldConfig } from '../api/config/field.config';
import { FieldEntityFactory } from './field/field.entity-factory';
export declare class FieldCollection {
    private readonly fieldFactory;
    private readonly fields;
    constructor(fieldFactory: FieldEntityFactory);
    getField(fieldId: FieldId): FieldEntity;
    getAllFieldIds(): Array<string>;
    getAllFields(): Array<FieldEntity>;
    getFieldsAsMap(): Map<string, FieldEntity>;
    initFields(fieldConfigs: Array<FieldConfig>): void;
    addFields(fields: Array<FieldEntity>): void;
    private addField;
    private clear;
}
