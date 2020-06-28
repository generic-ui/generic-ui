import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { UniqueValue } from '../unique-value';
export declare class UniqueFilterCalculatedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<UniqueValue>>);
    toDomainEvent(): DomainEvent<StructureId>;
}
