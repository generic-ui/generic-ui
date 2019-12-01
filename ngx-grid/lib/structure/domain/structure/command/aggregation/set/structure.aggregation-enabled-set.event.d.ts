import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
export declare class StructureAggregationEnabledSetEvent extends DomainEvent {
    readonly enabled: boolean;
    constructor(aggregateId: StructureId, enabled: boolean);
}
