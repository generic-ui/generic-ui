import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SearchPhraseRepository } from './search-phrase.repository';
import { SearchPhraseSetDomainEvent } from '../../domain/set-phrase/search-phrase-set.domain-event';
import { StructureId } from '../../../core/domain/structure.id';
export declare class SearchPhraseSetEventHandler implements DomainEventHandler<StructureId, SearchPhraseSetDomainEvent> {
    private structureSearchPhraseRepository;
    constructor(structureSearchPhraseRepository: SearchPhraseRepository);
    forEvent(): DomainEventType<SearchPhraseSetDomainEvent>;
    handle(event: SearchPhraseSetDomainEvent): void;
}
