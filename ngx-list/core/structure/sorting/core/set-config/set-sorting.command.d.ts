import { StructureId } from '../../../structure-core/api/global/structure.id';
import { SortingConfig } from '../../api/config/sorting-config';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class SetSortingCommand extends StructureCommand {
    private readonly sortingConfig;
    constructor(structureId: StructureId, sortingConfig: SortingConfig);
    getSortingConfig(): SortingConfig;
}
