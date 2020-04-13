import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class RowHeightSetEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
