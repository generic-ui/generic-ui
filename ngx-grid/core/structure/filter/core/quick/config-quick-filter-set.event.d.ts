import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../structure-core/core/structure.domain-event';
export declare class ConfigQuickFilterSetEvent extends StructureDomainEvent {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    getEnabled(): boolean;
}
