import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { SearchConfig } from '../../domain-api/search-config';
export declare class SetConfigSearchingCommand extends Command {
    private readonly searchConfig;
    constructor(structureId: StructureId, searchConfig: SearchConfig);
    getConfig(): SearchConfig;
}
