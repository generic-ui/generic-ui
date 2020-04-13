import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class StructureFilterToggledEvent extends DomainEvent<StructureId> {
    constructor(aggregateId: StructureId);
}
