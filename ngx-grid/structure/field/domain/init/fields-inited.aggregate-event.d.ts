import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { TypeField } from '../data-type/type.field';
import { FieldConfig } from '../../domain-api/field.config';
export declare class FieldsInitedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly fieldConfigs;
    private readonly fields;
    constructor(structureId: StructureId, fieldConfigs: Array<FieldConfig>, // TODO merge
    fields: Array<TypeField>);
    toDomainEvent(): DomainEvent<StructureId>;
    getFieldConfigs(): Array<FieldConfig>;
    getFields(): Array<TypeField>;
}
