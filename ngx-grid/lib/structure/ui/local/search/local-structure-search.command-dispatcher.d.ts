import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSearchDispatcher } from '../../../domain/structure/search/structure.search.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SearchConfig } from '../../../ui-api/structure/search/search-config';
import { StructureSearchHighlightArchive } from '../../../read/structure/searching/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../read/structure/searching/placeholder/structure.search-placeholder.archive';
export declare class LocalStructureSearchCommandDispatcher extends StructureSearchDispatcher {
    private structureId;
    constructor(structureId: StructureId, commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: StructureSearchHighlightArchive, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig): void;
    search(phrase: string): void;
}
