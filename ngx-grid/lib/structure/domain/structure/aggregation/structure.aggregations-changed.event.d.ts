import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
import { AggregatedValues } from './calculation/aggregated.values';
export declare class StructureAggregationsChangedEvent extends DomainEvent {
    private readonly values;
    constructor(structureId: StructureId, values: Map<string, AggregatedValues>);
    getAggregations(): Map<string, AggregatedValues>;
}
