import { ItemEntity } from '../../../domain/item/item.entity';
import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export declare class OriginSetEvent extends StructureDomainEvent {
    private readonly origin;
    constructor(aggregateId: StructureId, origin: Array<ItemEntity>);
    getOrigin(): Array<ItemEntity>;
}
