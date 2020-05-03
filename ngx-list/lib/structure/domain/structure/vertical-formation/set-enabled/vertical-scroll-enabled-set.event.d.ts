import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class VerticalScrollEnabledSetEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
