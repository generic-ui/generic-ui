import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare const StructureSummariesEnabledSetEventName = "StructureSummariesEnabledSetEvent";
export declare class StructureSummariesEnabledSetEvent extends DomainEvent<StructureId> {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
