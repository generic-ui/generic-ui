import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { UniqueValue } from '../unique-value';
export declare class UniqueFilterCalculatedEvent extends DomainEvent<StructureId> {
    private readonly map;
    constructor(aggregateId: StructureId, map: Map<string, Array<UniqueValue>>);
    getUniqueValues(): Map<string, Array<UniqueValue>>;
}
