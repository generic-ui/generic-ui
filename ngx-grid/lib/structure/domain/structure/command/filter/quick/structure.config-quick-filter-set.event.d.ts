import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class StructureConfigQuickFilterSetEvent extends DomainEvent {
    private readonly enabled;
    constructor(aggregateId: AggregateId, enabled: boolean);
    getEnabled(): boolean;
}
