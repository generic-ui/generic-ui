import { FieldConfig } from '../../api/field.config';
import { FieldEntity } from './field.entity';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldEntityIdGenerator } from './field-entity-id.generator';
export declare class FieldEntityFactory {
    private readonly fieldIdGenerator;
    private readonly dataFieldFactory;
    constructor(fieldIdGenerator: FieldEntityIdGenerator, dataFieldFactory: DataFieldFactory);
    create(configs: Array<FieldConfig>): Array<FieldEntity>;
    private getFieldName;
}
