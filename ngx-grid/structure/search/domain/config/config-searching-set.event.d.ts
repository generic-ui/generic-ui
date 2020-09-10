import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
export declare class ConfigSearchingSetEvent extends DomainEvent<StructureId> {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
