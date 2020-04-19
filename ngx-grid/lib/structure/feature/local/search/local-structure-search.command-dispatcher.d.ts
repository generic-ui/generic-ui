import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSearchDispatcher } from '../../../domain/structure/search/structure.search.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SearchConfig } from '../../../feature-api/search/search-config';
import { StructureSearchHighlightArchive } from '../../../feature-api/search/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../feature-api/search/placeholder/structure.search-placeholder.archive';
export declare class LocalStructureSearchCommandDispatcher extends StructureSearchDispatcher {
    private structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: StructureSearchHighlightArchive, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig): void;
    search(phrase: string): void;
}
