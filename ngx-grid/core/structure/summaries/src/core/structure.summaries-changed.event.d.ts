import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SummariesValues } from '../domain/calculation/summaries.values';
import { StructureDomainEvent } from '../../../structure-core/src/core/structure.domain-event';
export declare class StructureSummariesChangedEvent extends StructureDomainEvent {
    private readonly values;
    constructor(structureId: StructureId, values: Map<string, SummariesValues>);
    getSummaries(): Map<string, SummariesValues>;
}
