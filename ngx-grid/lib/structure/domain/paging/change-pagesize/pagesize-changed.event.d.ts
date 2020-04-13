import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class PagesizeChangedEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
