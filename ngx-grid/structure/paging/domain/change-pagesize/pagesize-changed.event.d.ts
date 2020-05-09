import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class PagesizeChangedEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
