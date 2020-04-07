import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class StructureAggregationEnabledSetEvent extends DomainEvent {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
