import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { Field } from '../field/field';
import { FieldConfig } from '../../api/field.config';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export declare class FieldsInitedAggregateEvent extends StructureAggregateEvent {
    private readonly fieldConfigs;
    private readonly fields;
    constructor(structureId: StructureId, fieldConfigs: Array<FieldConfig>, // TODO merge
    fields: Array<Field>);
    toDomainEvent(): DomainEvent<StructureId>;
    getFieldConfigs(): Array<FieldConfig>;
    getFields(): Array<Field>;
}
//# sourceMappingURL=fields-inited.aggregate-event.d.ts.map