import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../../domain/origin/origin-item-entity';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../structure-core/core/structure.aggregate-event';
export declare class StructurePreparedEntitiesSetAggregateEvent extends StructureAggregateEvent {
    private readonly preparedItems;
    constructor(aggregateId: AggregateId, preparedItems: Array<OriginItemEntity>);
    toDomainEvent(): DomainEvent<StructureId>;
    getPreparedItems(): Array<OriginItemEntity>;
}
