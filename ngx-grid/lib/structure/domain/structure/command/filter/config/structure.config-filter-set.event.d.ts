import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class StructureConfigFilterSetEvent extends DomainEvent {
    private readonly enabled;
    constructor(aggregateId: AggregateId, enabled: boolean);
    getEnabled(): boolean;
}
