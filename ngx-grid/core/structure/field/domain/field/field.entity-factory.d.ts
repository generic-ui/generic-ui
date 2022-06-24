import { FieldConfig } from '../../api/config/field.config';
import { FieldEntity } from './field.entity';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldEntityIdGenerator } from './field-entity-id.generator';
export declare class FieldEntityFactory {
    private readonly fieldIdGenerator;
    private readonly dataFieldFactory;
    constructor(fieldIdGenerator: FieldEntityIdGenerator, dataFieldFactory: DataFieldFactory);
    static readonly services: (typeof DataFieldFactory | typeof FieldEntityIdGenerator)[];
    create(configs: Array<FieldConfig>): Array<FieldEntity>;
    private getFieldName;
}
