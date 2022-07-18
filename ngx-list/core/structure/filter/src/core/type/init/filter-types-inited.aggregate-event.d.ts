import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { FilterTypeModel } from '../../../api/type/filter-type.model';
import { StructureAggregateEvent } from '../../../../../structure-core/src/core/structure.aggregate-event';
export declare class FilterTypesInitedAggregateEvent extends StructureAggregateEvent {
    private readonly filterTypes;
    constructor(structureId: StructureId, filterTypes: Map<string, Array<FilterTypeModel>>);
    toDomainEvent(): DomainEvent<StructureId>;
    getFilterTypes(): Map<string, Array<FilterTypeModel>>;
}
