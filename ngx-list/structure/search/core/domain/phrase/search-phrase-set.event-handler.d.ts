import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SearchPhraseArchive } from './search-phrase.archive';
import { SearchPhraseSetDomainEvent } from './set-phrase/search-phrase-set.domain-event';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class SearchPhraseSetEventHandler implements DomainEventHandler<StructureId, SearchPhraseSetDomainEvent> {
    private readonly searchPhraseRepository;
    constructor(searchPhraseRepository: SearchPhraseArchive);
    forEvent(): DomainEventType<SearchPhraseSetDomainEvent>;
    handle(event: SearchPhraseSetDomainEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchPhraseSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchPhraseSetEventHandler>;
}
//# sourceMappingURL=search-phrase-set.event-handler.d.ts.map