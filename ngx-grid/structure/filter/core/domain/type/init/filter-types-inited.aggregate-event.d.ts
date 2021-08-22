import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/domain/structure.id';
import { FilterTypeReadModel } from '../../../api/type/filter-type.read-model';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export declare class FilterTypesInitedAggregateEvent extends StructureAggregateEvent {
    private readonly filterTypes;
    constructor(structureId: StructureId, filterTypes: Map<string, Array<FilterTypeReadModel>>);
    toDomainEvent(): DomainEvent<StructureId>;
    getFilterTypes(): Map<string, Array<FilterTypeReadModel>>;
}
