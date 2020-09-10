import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
export declare class SearchPhraseSetDomainEvent extends DomainEvent<StructureId> {
    private readonly phrase;
    private readonly initial;
    constructor(aggregateId: StructureId, phrase: string, initial: boolean);
    getPhrase(): string;
    isInitial(): boolean;
}
