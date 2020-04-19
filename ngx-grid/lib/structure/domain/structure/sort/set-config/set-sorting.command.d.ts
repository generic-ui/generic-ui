import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
import { SortingConfig } from '../../../../feature-api/sorting-config';
export declare class SetSortingCommand extends Command {
    private readonly sortingConfig;
    constructor(structureId: StructureId, sortingConfig: SortingConfig);
    getSortingConfig(): SortingConfig;
}
