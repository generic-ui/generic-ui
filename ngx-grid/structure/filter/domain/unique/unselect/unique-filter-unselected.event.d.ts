import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class UniqueFilterUnselectedEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
