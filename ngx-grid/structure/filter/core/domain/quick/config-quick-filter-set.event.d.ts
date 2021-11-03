import { StructureId } from '../../../../core/api/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class ConfigQuickFilterSetEvent extends StructureDomainEvent {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    getEnabled(): boolean;
}
//# sourceMappingURL=config-quick-filter-set.event.d.ts.map