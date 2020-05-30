import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchDispatcher } from '../../../../../structure/search/domain/search.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SearchConfig } from '../../../../../structure/search/domain-api/search-config';
import { SearchHighlightArchive } from '../../../../../structure/search/domain-api/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../../../../../structure/search/domain-api/placeholder/search-placeholder.archive';
export declare class LocalStructureSearchCommandDispatcher extends SearchDispatcher {
    private structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: SearchHighlightArchive, structureSearchPlaceholderArchive: SearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig): void;
    search(phrase: string): void;
}
