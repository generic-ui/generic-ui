import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { ActiveFilterReadModel } from '../../../domain-api/active/active-filter.read-model';
export declare class FilterRemovedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly activeFilters;
    constructor(aggregateId: StructureId, activeFilters: ReadonlyArray<ActiveFilterReadModel>);
    toDomainEvent(): DomainEvent<StructureId>;
}
