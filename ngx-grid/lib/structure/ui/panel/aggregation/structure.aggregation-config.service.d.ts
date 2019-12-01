import { StructureAggregationPanelConfigConverter } from './structure.aggregation-panel.config-converter';
import { StructureAggregationArchive } from './structure.aggregation.archive';
import { StructureAggregationCommandService } from '../../../ui-api/structure/aggregation/structure.aggregation.command-service';
import { StructureId } from '../../../domain/structure-id';
import { AggregationConfig } from '../../../ui-api/structure/aggregation/aggregation-config';
export declare class StructureAggregationConfigService {
    private structureAggregationPanelConfigConverter;
    private structureAggregationArchive;
    private structureAggregationCommandService;
    private structureId;
    constructor(structureAggregationPanelConfigConverter: StructureAggregationPanelConfigConverter, structureAggregationArchive: StructureAggregationArchive, structureAggregationCommandService: StructureAggregationCommandService, structureId: StructureId);
    set(config: AggregationConfig): void;
}
