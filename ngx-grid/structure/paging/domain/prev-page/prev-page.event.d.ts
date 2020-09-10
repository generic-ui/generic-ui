import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
export declare class PrevPageEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
