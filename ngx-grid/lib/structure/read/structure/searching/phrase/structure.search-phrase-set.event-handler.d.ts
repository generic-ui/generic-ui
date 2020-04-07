import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchPhraseRepository } from './structure.search-phrase.repository';
import { StructureSearchPhraseSetDomainEvent } from '../../../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
export declare class StructureSearchPhraseSetEventHandler extends DomainEventHandler {
    private structureSearchPhraseRepository;
    constructor(structureSearchPhraseRepository: StructureSearchPhraseRepository);
    handle(event: StructureSearchPhraseSetDomainEvent): void;
}
