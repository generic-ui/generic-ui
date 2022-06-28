import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureAggregateEvent } from '../../../structure-core/core/structure.aggregate-event';
export declare class PagesizeChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
