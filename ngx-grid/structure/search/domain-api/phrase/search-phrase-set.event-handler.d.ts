import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SearchPhraseRepository } from './search-phrase.repository';
import { SearchPhraseSetDomainEvent } from '../../domain/set-phrase/search-phrase-set.domain-event';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class SearchPhraseSetEventHandler implements DomainEventHandler<StructureId, SearchPhraseSetDomainEvent> {
    private structureSearchPhraseRepository;
    constructor(structureSearchPhraseRepository: SearchPhraseRepository);
    forEvent(): Type<SearchPhraseSetDomainEvent>;
    handle(event: SearchPhraseSetDomainEvent): void;
}
