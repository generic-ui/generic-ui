import { StructureId } from '../../../structure-core/api/global/structure.id';
import { SearchConfig } from '../../api/config/search-config';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class SetConfigSearchingCommand extends StructureCommand {
    private readonly searchConfig;
    constructor(structureId: StructureId, searchConfig: SearchConfig);
    getConfig(): SearchConfig;
}
