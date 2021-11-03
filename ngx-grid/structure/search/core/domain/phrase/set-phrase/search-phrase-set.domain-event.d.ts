import { StructureId } from '../../../../../core/api/structure.id';
import { StructureDomainEvent } from '../../../../../core/domain/structure.domain-event';
export declare class SearchPhraseSetDomainEvent extends StructureDomainEvent {
    private readonly phrase;
    private readonly initial;
    constructor(aggregateId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
//# sourceMappingURL=search-phrase-set.domain-event.d.ts.map