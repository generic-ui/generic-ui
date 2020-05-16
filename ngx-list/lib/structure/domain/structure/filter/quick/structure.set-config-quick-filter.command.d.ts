import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
import { QuickFiltersConfig } from '../../../../domain-api/filter/quick-filters.config';
export declare class StructureSetConfigQuickFilterCommand extends Command {
    private readonly quickFiltersConfig;
    constructor(structureId: StructureId, quickFiltersConfig: QuickFiltersConfig);
    getConfig(): QuickFiltersConfig;
}
