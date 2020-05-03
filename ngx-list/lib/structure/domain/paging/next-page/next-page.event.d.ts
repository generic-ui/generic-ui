import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class NextPageEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
