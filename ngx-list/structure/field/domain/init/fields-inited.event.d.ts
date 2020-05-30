import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { TypeField } from '../data-type/type.field';
import { FieldConfig } from '../../domain-api/field.config';
export declare class FieldsInitedEvent extends DomainEvent<StructureId> {
    readonly fieldConfigs: Array<FieldConfig>;
    private readonly fields;
    constructor(aggregateId: StructureId, fieldConfigs: Array<FieldConfig>, // TODO merge
    fields: Array<TypeField>);
    getFields(): Array<TypeField>;
}
