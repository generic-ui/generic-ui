import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/core/structure.domain-event';
export declare class SearchPhraseSetDomainEvent extends StructureDomainEvent {
    private readonly phrase;
    private readonly initial;
    constructor(aggregateId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
