import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
export declare class StructureSearchPhraseSetDomainEvent extends DomainEvent<StructureId> {
    private readonly phrase;
    constructor(aggregateId: StructureId, phrase: string);
    getPhrase(): string;
}
