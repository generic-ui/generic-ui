import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../domain/structure.id';
import { StructureSearchPhraseRepository } from '../../../read/structure/searching/phrase/structure.search-phrase.repository';
export declare class StructureSearchEventService {
    private readonly domainEventBus;
    private readonly structureSearchPhraseRepository;
    constructor(domainEventBus: DomainEventBus, structureSearchPhraseRepository: StructureSearchPhraseRepository);
    onSearchPhrase(structureId: StructureId): Observable<string>;
}
