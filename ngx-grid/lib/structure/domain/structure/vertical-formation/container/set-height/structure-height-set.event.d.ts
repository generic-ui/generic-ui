import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure.id';
export declare class StructureHeightSetEvent extends DomainEvent {
    constructor(aggregateId: StructureId);
}
