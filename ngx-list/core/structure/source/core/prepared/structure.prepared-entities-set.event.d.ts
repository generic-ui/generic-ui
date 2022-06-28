import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../structure-core/core/structure.domain-event';
export declare class StructurePreparedEntitiesSetEvent extends StructureDomainEvent {
    private readonly preparedItems;
    constructor(aggregateId: StructureId, preparedItems: Array<OriginItemEntity>);
    getPreparedItems(): Array<OriginItemEntity>;
}
