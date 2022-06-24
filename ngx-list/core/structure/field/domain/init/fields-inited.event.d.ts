import { StructureId } from '../../../core/api/global/structure.id';
import { FieldEntity } from '../field/field.entity';
import { FieldConfig } from '../../api/config/field.config';
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export declare class FieldsInitedEvent extends StructureDomainEvent {
    readonly fieldConfigs: Array<FieldConfig>;
    private readonly fields;
    constructor(aggregateId: StructureId, fieldConfigs: Array<FieldConfig>, // TODO merge
    fields: Array<FieldEntity>);
    getFields(): Array<FieldEntity>;
}
