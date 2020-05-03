import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
import { SummariesValues } from './calculation/summaries.values';
export declare class StructureSummariesChangedEvent extends DomainEvent<StructureId> {
    private readonly values;
    constructor(structureId: StructureId, values: Map<string, SummariesValues>);
    getSummaries(): Map<string, SummariesValues>;
}
