import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchConfig } from '../../../ui-api/structure/search/search-config';
import { StructureId } from '../../structure.id';
import { StructureSearchHighlightArchive } from '../../../read/structure/searching/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../read/structure/searching/placeholder/structure.search-placeholder.archive';
export declare class StructureSearchDispatcher {
    private commandDispatcher;
    private structureSearchHighlightArchive;
    private structureSearchPlaceholderArchive;
    constructor(commandDispatcher: CommandDispatcher, structureSearchHighlightArchive: StructureSearchHighlightArchive, structureSearchPlaceholderArchive: StructureSearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    search(phrase: string, structureId?: StructureId): void;
}
