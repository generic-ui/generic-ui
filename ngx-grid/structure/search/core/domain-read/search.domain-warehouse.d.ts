import { SearchingEnabledArchive } from '../domain/enabled/searching-enabled.archive';
import { SearchPhraseArchive } from '../domain/phrase/search-phrase.archive';
import { StructureId } from '../../../core/api/structure.id';
import { SearchWarehouse } from '../api/search.warehouse';
import { HermesObservable } from '@generic-ui/hermes';
import { SearchHighlightArchive } from '../domain/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../domain/placeholder/search-placeholder.archive';
export declare class SearchDomainWarehouse extends SearchWarehouse {
    private readonly searchingEnabledArchive;
    private readonly searchPhraseArchive;
    private readonly searchHighlightArchive;
    private readonly searchPlaceholderArchive;
    constructor(searchingEnabledArchive: SearchingEnabledArchive, searchPhraseArchive: SearchPhraseArchive, searchHighlightArchive: SearchHighlightArchive, searchPlaceholderArchive: SearchPlaceholderArchive);
    onSearchEnabled(structureId: StructureId): HermesObservable<boolean>;
    onPhrase(structureId: StructureId): HermesObservable<string>;
    onHighlight(structureId: StructureId): HermesObservable<boolean>;
    onPlaceholder(structureId: StructureId): HermesObservable<string>;
}
