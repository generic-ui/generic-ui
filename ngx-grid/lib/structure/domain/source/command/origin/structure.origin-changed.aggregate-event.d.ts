import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { OriginItemEntity } from './origin-item-entity';
export declare class StructureOriginChangedAggregateEvent extends AggregateEvent {
    private readonly origin;
    constructor(aggregateId: AggregateId, origin: Array<OriginItemEntity>);
    getOrigin(): Array<OriginItemEntity>;
}
