import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesCommandDispatcher } from '../../../../summaries/core/api/structure-summaries.command-dispatcher';
import { StructureId } from '../../../../core/api/structure.id';
import { SummariesConfig } from '../../../../summaries/core/api/summaries-config';
export declare class StructureSummariesConfigService {
    private structureSummariesPanelConfigConverter;
    private structureSummariesArchive;
    private structureSummariesCommandDispatcher;
    private structureId;
    constructor(structureSummariesPanelConfigConverter: StructureSummariesPanelConfigConverter, structureSummariesArchive: StructureSummariesArchive, structureSummariesCommandDispatcher: StructureSummariesCommandDispatcher, structureId: StructureId);
    set(config: SummariesConfig): void;
}
