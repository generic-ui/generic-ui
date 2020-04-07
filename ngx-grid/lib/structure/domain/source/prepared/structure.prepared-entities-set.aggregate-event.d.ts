import { AggregateEvent, AggregateId } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
import { StructureId } from '../../structure.id';
export declare class StructurePreparedEntitiesSetAggregateEvent extends AggregateEvent<StructureId> {
    private readonly preparedItems;
    constructor(aggregateId: AggregateId, preparedItems: Array<OriginItemEntity>);
    getPreparedItems(): Array<OriginItemEntity>;
}
