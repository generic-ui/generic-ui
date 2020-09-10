import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { SearchingRepository } from './enabled/searching.repository';
import { StructureId } from '../../core/domain/structure.id';
import { SearchPhraseRepository } from './phrase/search-phrase.repository';
export declare class SearchWarehouse implements Warehouse {
    private readonly structureSearchingRepository;
    private readonly searchPhraseRepository;
    constructor(structureSearchingRepository: SearchingRepository, searchPhraseRepository: SearchPhraseRepository);
    onSearchEnabled(structureId?: StructureId): Observable<boolean>;
    onPhrase(structureId?: StructureId): Observable<string>;
}
