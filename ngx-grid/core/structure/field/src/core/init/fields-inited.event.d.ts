import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { FieldEntity } from '../../domain/field/field.entity';
import { FieldConfig } from '../../api/config/field.config';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class FieldsInitedEvent extends StructureDomainEvent {
    readonly fieldConfigs: Array<FieldConfig>;
    private readonly fields;
    constructor(aggregateId: StructureId, fieldConfigs: Array<FieldConfig>, // TODO merge
    fields: Array<FieldEntity>);
    getFields(): Array<FieldEntity>;
}
