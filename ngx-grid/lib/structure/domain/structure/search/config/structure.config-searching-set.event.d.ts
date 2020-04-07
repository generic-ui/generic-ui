import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class StructureConfigSearchingSetEvent extends DomainEvent {
    private readonly enabled;
    constructor(aggregateId: AggregateId, enabled: boolean);
    getEnabled(): boolean;
}
