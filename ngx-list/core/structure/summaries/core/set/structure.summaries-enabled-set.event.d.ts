import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../structure-core/core/structure.domain-event';
export declare const StructureSummariesEnabledSetEventName = "StructureSummariesEnabledSetEvent";
export declare class StructureSummariesEnabledSetEvent extends StructureDomainEvent {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
