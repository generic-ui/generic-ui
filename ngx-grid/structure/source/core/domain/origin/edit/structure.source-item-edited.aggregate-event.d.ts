import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin-item-entity';
import { StructureId } from '../../../../../core/api/structure.id';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export declare class StructureSourceItemEditedAggregateEvent extends StructureAggregateEvent {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: AggregateId, beforeItem: OriginItemEntity, afterItem: OriginItemEntity);
    toDomainEvent(): DomainEvent<StructureId>;
    getBeforeItem(): OriginItemEntity;
    getAfterItem(): OriginItemEntity;
}
//# sourceMappingURL=structure.source-item-edited.aggregate-event.d.ts.map