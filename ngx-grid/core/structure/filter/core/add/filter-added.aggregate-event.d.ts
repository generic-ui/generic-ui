import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { ActiveFilterModel } from '../../api/active/active-filter.model';
import { StructureAggregateEvent } from '../../../structure-core/core/structure.aggregate-event';
export declare class FilterAddedAggregateEvent extends StructureAggregateEvent {
    private readonly activeFilters;
    constructor(aggregateId: StructureId, activeFilters: ReadonlyArray<ActiveFilterModel>);
    toDomainEvent(): DomainEvent<StructureId>;
}
