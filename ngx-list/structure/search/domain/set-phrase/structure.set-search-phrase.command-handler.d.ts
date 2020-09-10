import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SourceDomainEventPublisher } from '../../../source/domain/source.domain-event.publisher';
import { StructureAggregate } from '../../../core/domain/structure.aggregate';
export declare class StructureSetSearchPhraseCommandHandler implements CommandHandler<StructureAggregate, SetSearchPhraseCommand> {
    private readonly structureSourceDomainEventPublisher;
    private readonly domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: SourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSearchPhraseCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
}
