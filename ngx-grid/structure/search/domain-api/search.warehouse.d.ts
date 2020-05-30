import { Observable } from 'rxjs';
import { SearchingRepository } from './enabled/searching.repository';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { SearchPhraseRepository } from './phrase/search-phrase.repository';
export declare class SearchWarehouse {
    private readonly structureSearchingRepository;
    private readonly searchPhraseRepository;
    constructor(structureSearchingRepository: SearchingRepository, searchPhraseRepository: SearchPhraseRepository);
    onSearchEnabled(structureId?: StructureId): Observable<boolean>;
    onPhrase(structureId?: StructureId): Observable<string>;
}
