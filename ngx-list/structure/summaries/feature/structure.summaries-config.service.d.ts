import { StructureSummariesPanelConfigConverter } from './structure.summaries-panel.config-converter';
import { StructureSummariesArchive } from './structure.summaries.archive';
import { SummariesCommandInvoker } from '../core/api/summaries.command-invoker';
import { StructureId } from '../../core/api/structure.id';
import { SummariesConfig } from '../core/api/summaries-config';
export declare class StructureSummariesConfigService {
    private structureSummariesPanelConfigConverter;
    private structureSummariesArchive;
    private structureSummariesCommandDispatcher;
    private structureId;
    constructor(structureSummariesPanelConfigConverter: StructureSummariesPanelConfigConverter, structureSummariesArchive: StructureSummariesArchive, structureSummariesCommandDispatcher: SummariesCommandInvoker, structureId: StructureId);
    set(config: SummariesConfig): void;
}
