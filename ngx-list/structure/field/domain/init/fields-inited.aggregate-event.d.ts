import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { Field } from '../core/field/field';
import { FieldConfig } from '../../domain-api/field.config';
export declare class FieldsInitedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly fieldConfigs;
    private readonly fields;
    constructor(structureId: StructureId, fieldConfigs: Array<FieldConfig>, // TODO merge
    fields: Array<Field>);
    toDomainEvent(): DomainEvent<StructureId>;
    getFieldConfigs(): Array<FieldConfig>;
    getFields(): Array<Field>;
}
