import { StructureId } from '../../../../../core/domain/structure.id';
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export declare class SelectionEnabledSetEvent extends StructureDomainEvent {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
