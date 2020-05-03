import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { StructureSummariesCommandDispatcher } from '../../../feature-api/summaries/structure-summaries.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SummariesConfig } from '../../../feature-api/summaries/summaries-config';
export declare class StructureSummariesConfigService {
    private structureSummariesPanelConfigConverter;
    private structureSummariesArchive;
    private structureSummariesCommandDispatcher;
    private structureId;
    constructor(structureSummariesPanelConfigConverter: StructureSummariesPanelConfigConverter, structureSummariesArchive: StructureSummariesArchive, structureSummariesCommandDispatcher: StructureSummariesCommandDispatcher, structureId: StructureId);
    set(config: SummariesConfig): void;
}
