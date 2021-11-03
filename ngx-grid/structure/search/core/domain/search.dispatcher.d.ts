import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchConfig } from '../api/search-config';
import { StructureId } from '../../../core/api/structure.id';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
export declare class SearchDispatcher {
    private readonly commandDispatcher;
    private readonly searchHighlightArchive;
    private readonly searchPlaceholderArchive;
    constructor(commandDispatcher: CommandDispatcher, searchHighlightArchive: SearchHighlightArchive, searchPlaceholderArchive: SearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    search(phrase: string, structureId: StructureId): void;
    private searchOnInit;
}
