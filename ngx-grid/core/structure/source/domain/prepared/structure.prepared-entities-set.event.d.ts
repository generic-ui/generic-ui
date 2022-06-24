import { OriginItemEntity } from '../origin/origin-item-entity';
import { StructureId } from '../../../core/api/global/structure.id';
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export declare class StructurePreparedEntitiesSetEvent extends StructureDomainEvent {
    private readonly preparedItems;
    constructor(aggregateId: StructureId, preparedItems: Array<OriginItemEntity>);
    getPreparedItems(): Array<OriginItemEntity>;
}
