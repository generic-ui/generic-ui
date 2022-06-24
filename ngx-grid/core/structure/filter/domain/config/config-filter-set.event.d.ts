import { StructureId } from '../../../core/api/global/structure.id';
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export declare class ConfigFilterSetEvent extends StructureDomainEvent {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    getEnabled(): boolean;
}
