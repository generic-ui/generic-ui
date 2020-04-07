import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { AggregatedValues } from './calculation/aggregated.values';
import { StructureId } from '../../structure.id';
export declare class StructureAggregationsChangedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly aggregatedValues;
    constructor(aggregateId: AggregateId, aggregatedValues: Map<string, AggregatedValues>);
    getAggregations(): Map<string, AggregatedValues>;
}
