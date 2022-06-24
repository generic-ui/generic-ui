import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SourceDomainEventPublisher } from '../../../../source/domain/source.domain-event.publisher';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class StructureSetSearchPhraseCommandHandler implements CommandHandler<StructureAggregate, SetSearchPhraseCommand> {
    private readonly structureSourceDomainEventPublisher;
    private readonly domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: SourceDomainEventPublisher);
    static readonly services: (typeof SourceDomainEventPublisher)[];
    forCommand(): CommandType<SetSearchPhraseCommand>;
    handle(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
    publish(aggregate: StructureAggregate, command: SetSearchPhraseCommand): void;
}
