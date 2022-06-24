import { AggregateArchive } from '@generic-ui/hermes';
import { StructureSummariesPanelConfig } from '../../domain/config/structure.summaries-panel.config';
export declare class StructureSummariesConfigArchive extends AggregateArchive<StructureSummariesPanelConfig> {
    static readonly default: StructureSummariesPanelConfig;
    constructor();
}
