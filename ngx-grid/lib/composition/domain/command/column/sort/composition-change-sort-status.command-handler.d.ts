import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class CompositionChangeSortStatusCommandHandler extends CommandHandler<CompositionAggregate> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handleAggregate(composition: CompositionAggregate, command: CompositionChangeSortStatusCommand): void;
    publishDomainEvents(composition: CompositionAggregate, command: Command): void;
}
