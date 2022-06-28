import { QuickFiltersConfig } from '../../api/quick-filter/quick-filters.config';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class SetConfigQuickFilterCommand extends StructureCommand {
    private readonly quickFiltersConfig;
    constructor(structureId: StructureId, quickFiltersConfig: QuickFiltersConfig);
    getConfig(): QuickFiltersConfig;
}
