import { StructureId } from '../../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export declare class SearchPhraseSetDomainEvent extends StructureDomainEvent {
    private readonly phrase;
    private readonly initial;
    constructor(aggregateId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
