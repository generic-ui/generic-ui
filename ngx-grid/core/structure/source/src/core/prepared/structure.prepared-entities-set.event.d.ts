import { ItemEntity } from '../../domain/item/item.entity';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class StructurePreparedEntitiesSetEvent extends StructureDomainEvent {
    private readonly preparedItems;
    constructor(aggregateId: StructureId, preparedItems: Array<ItemEntity>);
    getPreparedItems(): Array<ItemEntity>;
}
