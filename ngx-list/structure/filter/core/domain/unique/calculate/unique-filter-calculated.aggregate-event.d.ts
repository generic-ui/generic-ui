import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/domain/structure.id';
import { UniqueValue } from '../unique-value';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export declare class UniqueFilterCalculatedAggregateEvent extends StructureAggregateEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<UniqueValue>>);
    toDomainEvent(): DomainEvent<StructureId>;
}
