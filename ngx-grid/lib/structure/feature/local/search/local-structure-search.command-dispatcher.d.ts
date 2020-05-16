import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSearchDispatcher } from '../../../domain/structure/search/structure.search.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SearchConfig } from '../../../domain-api/search/search-config';
import { StructureSearchHighlightArchive } from '../../../domain-api/search/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../domain-api/search/placeholder/structure.search-placeholder.archive';
export declare class LocalStructureSearchCommandDispatcher extends StructureSearchDispatcher {
    private structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: StructureSearchHighlightArchive, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig): void;
    search(phrase: string): void;
}
