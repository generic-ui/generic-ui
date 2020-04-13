import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchPhraseRepository } from './structure.search-phrase.repository';
import { StructureSearchPhraseSetDomainEvent } from '../../../../domain/structure/search/set-phrase/structure.search-phrase-set.domain-event';
import { StructureId } from '../../../../domain/structure.id';
export declare class StructureSearchPhraseSetEventHandler extends DomainEventHandler<StructureId> {
    private structureSearchPhraseRepository;
    constructor(structureSearchPhraseRepository: StructureSearchPhraseRepository);
    handle(event: StructureSearchPhraseSetDomainEvent): void;
}
