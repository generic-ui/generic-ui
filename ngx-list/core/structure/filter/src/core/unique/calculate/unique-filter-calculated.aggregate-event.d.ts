import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { UniqueValue } from '../../../domain/unique/unique-value';
import { StructureAggregateEvent } from '../../../../../structure-core/src/core/structure.aggregate-event';
export declare class UniqueFilterCalculatedAggregateEvent extends StructureAggregateEvent {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<UniqueValue>>);
    toDomainEvent(): DomainEvent<StructureId>;
}
