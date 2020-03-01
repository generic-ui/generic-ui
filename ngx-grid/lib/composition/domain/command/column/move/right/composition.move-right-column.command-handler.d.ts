import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition-event.converter';
import { CompositionAggregate } from '../../../composition.aggregate';
import { CompositionMoveRightColumnCommand } from './composition.move-right-column.command';
export declare class CompositionMoveRightColumnCommandHandler extends CommandHandler<CompositionAggregate> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    handleAggregate(aggregate: CompositionAggregate, command: CompositionMoveRightColumnCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: Command): void;
    private publishEvents;
}
