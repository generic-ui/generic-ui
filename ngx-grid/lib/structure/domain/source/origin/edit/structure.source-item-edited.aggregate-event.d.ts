import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin-item-entity';
import { StructureId } from '../../../structure.id';
export declare class StructureSourceItemEditedAggregateEvent extends AggregateEvent<StructureId> {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: AggregateId, beforeItem: OriginItemEntity, afterItem: OriginItemEntity);
    getBeforeItem(): OriginItemEntity;
    getAfterItem(): OriginItemEntity;
}
