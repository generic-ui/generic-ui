import { SearchingEnabledArchive } from '../core/enabled/searching-enabled.archive';
import { SearchPhraseArchive } from '../core/phrase/search-phrase.archive';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SearchWarehouse } from '../api/search.warehouse';
import { HermesObservable } from '@generic-ui/hermes';
import { SearchHighlightArchive } from '../core/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../core/placeholder/search-placeholder.archive';
export declare class SearchDomainWarehouse extends SearchWarehouse {
    private readonly searchingEnabledArchive;
    private readonly searchPhraseArchive;
    private readonly searchHighlightArchive;
    private readonly searchPlaceholderArchive;
    constructor(searchingEnabledArchive: SearchingEnabledArchive, searchPhraseArchive: SearchPhraseArchive, searchHighlightArchive: SearchHighlightArchive, searchPlaceholderArchive: SearchPlaceholderArchive);
    static readonly services: (typeof SearchHighlightArchive | typeof SearchPlaceholderArchive | typeof SearchPhraseArchive | typeof SearchingEnabledArchive)[];
    onSearchEnabled(structureId: StructureId): HermesObservable<boolean>;
    onPhrase(structureId: StructureId): HermesObservable<string>;
    onHighlight(structureId: StructureId): HermesObservable<boolean>;
    onPlaceholder(structureId: StructureId): HermesObservable<string>;
}
