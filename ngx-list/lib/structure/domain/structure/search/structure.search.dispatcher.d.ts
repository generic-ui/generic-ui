import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchConfig } from '../../../domain-api/search/search-config';
import { StructureId } from '../../structure.id';
import { StructureSearchHighlightArchive } from '../../../domain-api/search/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../domain-api/search/placeholder/structure.search-placeholder.archive';
export declare class StructureSearchDispatcher {
    private commandDispatcher;
    private structureSearchHighlightArchive;
    private structureSearchPlaceholderArchive;
    constructor(commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: StructureSearchHighlightArchive, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    search(phrase: string, structureId?: StructureId): void;
}
