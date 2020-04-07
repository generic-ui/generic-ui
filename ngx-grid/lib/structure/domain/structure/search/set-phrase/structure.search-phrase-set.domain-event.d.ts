import { AggregateId, DomainEvent } from '@generic-ui/hermes';
export declare class StructureSearchPhraseSetDomainEvent extends DomainEvent {
    private readonly phrase;
    constructor(aggregateId: AggregateId, phrase: string);
    getPhrase(): string;
}
