import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { FilterTypeReadModel } from '../../../domain-api/type/filter-type.read-model';
export declare class FilterTypesInitedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly filterTypes;
    constructor(structureId: StructureId, filterTypes: Map<string, Array<FilterTypeReadModel>>);
    toDomainEvent(): DomainEvent<StructureId>;
    getFilterTypes(): Map<string, Array<FilterTypeReadModel>>;
}
