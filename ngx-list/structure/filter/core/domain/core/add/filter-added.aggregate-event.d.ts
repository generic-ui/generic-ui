import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/domain/structure.id';
import { ActiveFilterReadModel } from '../../../api/active/active-filter.read-model';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export declare class FilterAddedAggregateEvent extends StructureAggregateEvent {
    private readonly activeFilters;
    constructor(aggregateId: StructureId, activeFilters: ReadonlyArray<ActiveFilterReadModel>);
    toDomainEvent(): DomainEvent<StructureId>;
}
