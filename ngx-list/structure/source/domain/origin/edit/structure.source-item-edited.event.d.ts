import { DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin-item-entity';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class StructureSourceItemEditedEvent extends DomainEvent<StructureId> {
    private readonly beforeItem;
    private readonly afterItem;
    constructor(aggregateId: StructureId, beforeItem: OriginItemEntity, afterItem: OriginItemEntity);
    getBeforeItem(): OriginItemEntity;
    getAfterItem(): OriginItemEntity;
}
