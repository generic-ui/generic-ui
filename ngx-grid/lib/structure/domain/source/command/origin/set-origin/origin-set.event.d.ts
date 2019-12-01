import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin-item-entity';
export declare class OriginSetEvent extends DomainEvent {
    private readonly origin;
    constructor(aggregateId: AggregateId, origin: Array<OriginItemEntity>);
    getOrigin(): Array<OriginItemEntity>;
}
