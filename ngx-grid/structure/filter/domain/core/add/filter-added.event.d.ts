import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { FieldId } from '../../../../field/domain/core/field/field.id';
import { FilterTypeId } from '../../type/filter-type.id';
export declare class FilterAddedEvent extends DomainEvent<StructureId> {
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly value;
    constructor(aggregateId: StructureId, fieldId: FieldId, filterTypeId: FilterTypeId, value: any);
}
