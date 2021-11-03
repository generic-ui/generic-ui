import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchConfig } from '../api/search-config';
import { StructureId } from '../../../core/api/structure.id';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
import * as i0 from "@angular/core";
export declare class SearchDispatcher {
    private readonly commandDispatcher;
    private readonly searchHighlightArchive;
    private readonly searchPlaceholderArchive;
    constructor(commandDispatcher: CommandDispatcher, searchHighlightArchive: SearchHighlightArchive, searchPlaceholderArchive: SearchPlaceholderArchive);
    setSearchingConfig(config: SearchConfig, structureId: StructureId): void;
    search(phrase: string, structureId: StructureId): void;
    private searchOnInit;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchDispatcher>;
}
//# sourceMappingURL=search.dispatcher.d.ts.map