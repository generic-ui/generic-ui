import { StructureId } from '../../core/api/global/structure.id';
import { SummariesValues } from './calculation/summaries.values';
import { StructureDomainEvent } from '../../core/domain/structure.domain-event';
export declare class StructureSummariesChangedEvent extends StructureDomainEvent {
    private readonly values;
    constructor(structureId: StructureId, values: Map<string, SummariesValues>);
    getSummaries(): Map<string, SummariesValues>;
}
