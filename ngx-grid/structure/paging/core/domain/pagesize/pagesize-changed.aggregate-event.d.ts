import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export declare class PagesizeChangedAggregateEvent extends StructureAggregateEvent {
    constructor(structureId: StructureId);
    toDomainEvent(): DomainEvent<StructureId>;
}
//# sourceMappingURL=pagesize-changed.aggregate-event.d.ts.map