import { FieldConfig } from '../../../domain-api/field.config';
import { Field } from './field';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldIdGenerator } from './field-id.generator';
export declare class FieldFactory {
    private readonly fieldIdGenerator;
    private readonly dataFieldFactory;
    constructor(fieldIdGenerator: FieldIdGenerator, dataFieldFactory: DataFieldFactory);
    create(configs: Array<FieldConfig>): Array<Field>;
    private getFieldName;
}
