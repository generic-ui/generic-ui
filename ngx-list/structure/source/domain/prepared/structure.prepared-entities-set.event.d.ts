import { DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class StructurePreparedEntitiesSetEvent extends DomainEvent<StructureId> {
    private readonly preparedItems;
    constructor(aggregateId: StructureId, preparedItems: Array<OriginItemEntity>);
    getPreparedItems(): Array<OriginItemEntity>;
}
