import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SummariesPublisher } from '../api/summaries.publisher';
import { SummariesConfig } from '../api/config/summaries-config';
import { StructureSummariesPanelConfigConverter } from '../core-read/config/structure.summaries-panel.config-converter';
import { StructureSummariesConfigArchive } from '../core-read/config/structure.summaries-config.archive';
import { SummariesDispatcher } from './summaries.dispatcher';
export declare class SummariesDomainPublisher extends SummariesPublisher {
    private readonly summariesDispatcher;
    private readonly configConverter;
    private readonly structureSummariesConfigArchive;
    constructor(summariesDispatcher: SummariesDispatcher, configConverter: StructureSummariesPanelConfigConverter, structureSummariesConfigArchive: StructureSummariesConfigArchive);
    static readonly services: (typeof SummariesDispatcher | typeof StructureSummariesConfigArchive | typeof StructureSummariesPanelConfigConverter)[];
    setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
    setConfig(config: SummariesConfig, structureId: StructureId): void;
}
