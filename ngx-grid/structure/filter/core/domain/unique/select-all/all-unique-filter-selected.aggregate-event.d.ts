import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/api/structure.id';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export declare class AllUniqueFilterSelectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
//# sourceMappingURL=all-unique-filter-selected.aggregate-event.d.ts.map