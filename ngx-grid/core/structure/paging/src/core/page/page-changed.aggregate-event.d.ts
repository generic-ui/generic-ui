import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
export declare class PageChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
