import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionAggregate } from '../../composition.aggregate';
import { SetGroupsCommand } from './set-groups.command';
export declare class SetGroupsCommandHandler implements CommandHandler<CompositionAggregate, SetGroupsCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    private readonly compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): CommandType<SetGroupsCommand>;
    publishDomainEvents(aggregate: CompositionAggregate, command: SetGroupsCommand): void;
    handleAggregate(aggregate: CompositionAggregate, command: SetGroupsCommand): void;
    private publishEvents;
}
