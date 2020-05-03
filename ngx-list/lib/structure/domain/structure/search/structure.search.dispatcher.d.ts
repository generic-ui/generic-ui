import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchConfig } from '../../../feature-api/search/search-config';
import { StructureId } from '../../structure.id';
import { StructureSearchHighlightArchive } from '../../../feature-api/search/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../feature-api/search/placeholder/structure.search-placeholder.archive';
export declare class StructureSearchDispatcher {
    private commandDispatcher;
    private structureSearchHighlightArchive;
    private structureSearchPlaceholderArchive;
    constructor(commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: StructureSearchHighlightArchive, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    search(phrase: string, structureId?: StructureId): void;
}
