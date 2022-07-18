import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { FieldId } from '../../../../field/src/domain/field/field.id';
import { FilterTypeId } from '../../domain/type/filter-type.id';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class FilterAddedEvent extends StructureDomainEvent {
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly value;
    constructor(aggregateId: StructureId, fieldId: FieldId, filterTypeId: FilterTypeId, value: any);
}
