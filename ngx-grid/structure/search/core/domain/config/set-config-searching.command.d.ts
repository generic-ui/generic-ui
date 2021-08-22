import { StructureId } from '../../../../core/domain/structure.id';
import { SearchConfig } from '../../api/search-config';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetConfigSearchingCommand extends StructureCommand {
    private readonly searchConfig;
    constructor(structureId: StructureId, searchConfig: SearchConfig);
    getConfig(): SearchConfig;
}
