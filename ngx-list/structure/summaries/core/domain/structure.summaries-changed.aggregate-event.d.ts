import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { SummariesValues } from './calculation/summaries.values';
import { StructureId } from '../../../core/domain/structure.id';
import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
export declare const StructureSummariesChangedAggregateEventName = "StructureSummariesChangedAggregateEvent";
export declare class StructureSummariesChangedAggregateEvent extends StructureAggregateEvent {
    private readonly summarizedValues;
    constructor(aggregateId: AggregateId, summarizedValues: Map<string, SummariesValues>);
    toDomainEvent(): DomainEvent<StructureId>;
    getSummaries(): Map<string, SummariesValues>;
}
