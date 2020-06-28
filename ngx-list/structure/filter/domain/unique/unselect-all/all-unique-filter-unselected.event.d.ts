import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
export declare class AllUniqueFilterUnselectedEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
