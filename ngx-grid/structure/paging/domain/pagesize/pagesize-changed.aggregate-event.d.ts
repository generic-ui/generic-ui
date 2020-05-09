import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class PagesizeChangedAggregateEvent extends AggregateEvent<StructureId> {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
