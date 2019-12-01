import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin-item-entity';
export declare class StructureSourceItemEditedAggregateEvent extends AggregateEvent {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: AggregateId, beforeItem: OriginItemEntity, afterItem: OriginItemEntity);
    getBeforeItem(): OriginItemEntity;
    getAfterItem(): OriginItemEntity;
}
