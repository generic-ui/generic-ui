import { StructureId } from '../../../../core/domain/structure.id';
import { Field } from '../field/field';
import { FieldConfig } from '../../api/field.config';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class FieldsInitedEvent extends StructureDomainEvent {
    readonly fieldConfigs: Array<FieldConfig>;
    private readonly fields;
    constructor(aggregateId: StructureId, fieldConfigs: Array<FieldConfig>, // TODO merge
    fields: Array<Field>);
    getFields(): Array<Field>;
}
