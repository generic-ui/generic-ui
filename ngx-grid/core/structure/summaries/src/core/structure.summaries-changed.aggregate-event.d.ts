import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { SummariesValues } from '../domain/calculation/summaries.values';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../structure-core/src/core/structure.aggregate-event';
export declare class StructureSummariesChangedAggregateEvent extends StructureAggregateEvent {
    private readonly summarizedValues;
    constructor(aggregateId: AggregateId, summarizedValues: Map<string, SummariesValues>);
    toDomainEvent(): DomainEvent<StructureId>;
    getSummaries(): Map<string, SummariesValues>;
}
