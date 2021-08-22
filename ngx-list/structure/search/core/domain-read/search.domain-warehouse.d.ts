import { SearchingRepository } from '../api/enabled/searching.repository';
import { SearchPhraseRepository } from '../api/phrase/search-phrase.repository';
import { StructureId } from '../../../core/domain/structure.id';
import { Observable } from 'rxjs';
import { SearchWarehouse } from '../api/search.warehouse';
export declare class SearchDomainWarehouse extends SearchWarehouse {
    private readonly structureSearchingRepository;
    private readonly searchPhraseRepository;
    constructor(structureSearchingRepository: SearchingRepository, searchPhraseRepository: SearchPhraseRepository);
    onSearchEnabled(structureId?: StructureId): Observable<boolean>;
    onPhrase(structureId?: StructureId): Observable<string>;
}
