import { StructureId } from '../../../core/api/global/structure.id';
import { SearchConfig } from '../../api/config/search-config';
import { StructureCommand } from '../../../core/domain/structure.command';
export declare class SetConfigSearchingCommand extends StructureCommand {
    private readonly searchConfig;
    constructor(structureId: StructureId, searchConfig: SearchConfig);
    getConfig(): SearchConfig;
}
