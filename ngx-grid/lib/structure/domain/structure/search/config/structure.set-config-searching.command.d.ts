import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
import { SearchConfig } from '../../../../domain-api/search/search-config';
export declare class StructureSetConfigSearchingCommand extends Command {
    private readonly searchConfig;
    constructor(structureId: StructureId, searchConfig: SearchConfig);
    getConfig(): SearchConfig;
}
