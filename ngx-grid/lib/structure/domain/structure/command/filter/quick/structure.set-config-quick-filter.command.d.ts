import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { QuickFiltersConfig } from '../../../../../ui-api/structure/filter/quick-filters.config';
export declare class StructureSetConfigQuickFilterCommand extends Command {
    readonly structureId: StructureId;
    private readonly quickFiltersConfig;
    constructor(structureId: StructureId, quickFiltersConfig: QuickFiltersConfig);
    getConfig(): QuickFiltersConfig;
}
