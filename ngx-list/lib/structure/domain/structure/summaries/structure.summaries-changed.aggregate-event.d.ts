import { AggregateEvent, AggregateId, DomainEvent } from '@generic-ui/hermes';
import { SummariesValues } from './calculation/summaries.values';
import { StructureId } from '../../structure.id';
export declare const StructureSummariesChangedAggregateEventName = "StructureSummariesChangedAggregateEvent";
export declare class StructureSummariesChangedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly summarizedValues;
    constructor(aggregateId: AggregateId, summarizedValues: Map<string, SummariesValues>);
    toDomainEvent(): DomainEvent<StructureId>;
    getSummaries(): Map<string, SummariesValues>;
}
