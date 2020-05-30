import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { StructureSourceDomainEventPublisher } from '../../../../lib/structure/domain/source/structure.source.domain-event.publisher';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class StructureSetSearchPhraseCommandHandler implements CommandHandler<StructureAggregate, SetSearchPhraseCommand> {
    private readonly structureSourceDomainEventPublisher;
    private readonly domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSearchPhraseCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
}
