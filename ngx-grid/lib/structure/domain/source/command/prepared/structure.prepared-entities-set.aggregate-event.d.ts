import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
export declare class StructurePreparedEntitiesSetAggregateEvent extends AggregateEvent {
    private readonly preparedItems;
    constructor(aggregateId: AggregateId, preparedItems: Array<OriginItemEntity>);
    getPreparedItems(): Array<OriginItemEntity>;
}
