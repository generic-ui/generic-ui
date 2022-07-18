import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SearchPhraseArchive } from './search-phrase.archive';
import { SearchPhraseSetDomainEvent } from './set-phrase/search-phrase-set.domain-event';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class SearchPhraseSetEventHandler implements DomainEventHandler<StructureId, SearchPhraseSetDomainEvent> {
    private readonly searchPhraseRepository;
    constructor(searchPhraseRepository: SearchPhraseArchive);
    static readonly services: (typeof SearchPhraseArchive)[];
    forEvent(): DomainEventType<SearchPhraseSetDomainEvent>;
    handle(event: SearchPhraseSetDomainEvent): void;
}
