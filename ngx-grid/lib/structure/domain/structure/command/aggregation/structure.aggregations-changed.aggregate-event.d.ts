import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { AggregatedValues } from './calculation/aggregated.values';
export declare class StructureAggregationsChangedAggregateEvent extends AggregateEvent {
    private readonly aggregatedValues;
    constructor(aggregateId: AggregateId, aggregatedValues: Map<string, AggregatedValues>);
    getAggregations(): Map<string, AggregatedValues>;
}
