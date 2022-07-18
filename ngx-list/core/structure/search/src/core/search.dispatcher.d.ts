import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchConfig } from '../api/config/search-config';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
export declare class SearchDispatcher {
    private readonly commandDispatcher;
    private readonly searchHighlightArchive;
    private readonly searchPlaceholderArchive;
    constructor(commandDispatcher: CommandDispatcher, searchHighlightArchive: SearchHighlightArchive, searchPlaceholderArchive: SearchPlaceholderArchive);
    static readonly services: (typeof CommandDispatcher | typeof SearchHighlightArchive | typeof SearchPlaceholderArchive)[];
    setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    search(phrase: string, structureId: StructureId): void;
    private searchOnInit;
}
