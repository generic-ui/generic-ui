import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchDispatcher } from '../../../../search/core/domain/search.dispatcher';
import { StructureId } from '../../../../core/api/structure.id';
import { SearchConfig } from '../../../../search/core/api/search-config';
import { SearchHighlightArchive } from '../../../../search/core/api/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../../../../search/core/api/placeholder/search-placeholder.archive';
export declare class LocalStructureSearchCommandDispatcher extends SearchDispatcher {
    private structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: SearchHighlightArchive, structureSearchPlaceholderArchive: SearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig): void;
    search(phrase: string): void;
}
