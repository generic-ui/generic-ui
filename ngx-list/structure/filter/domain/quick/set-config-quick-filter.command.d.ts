import { Command } from '@generic-ui/hermes';
import { QuickFiltersConfig } from '../../domain-api/quick-filters.config';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class SetConfigQuickFilterCommand extends Command {
    private readonly quickFiltersConfig;
    constructor(structureId: StructureId, quickFiltersConfig: QuickFiltersConfig);
    getConfig(): QuickFiltersConfig;
}
