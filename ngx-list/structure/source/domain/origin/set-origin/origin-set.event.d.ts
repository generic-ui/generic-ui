import { DomainEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin-item-entity';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
export declare class OriginSetEvent extends DomainEvent<StructureId> {
    private readonly origin;
    constructor(aggregateId: StructureId, origin: Array<OriginItemEntity>);
    getOrigin(): Array<OriginItemEntity>;
}
