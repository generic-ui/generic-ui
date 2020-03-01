import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
import { CompositionContainerWidthSetEvent } from './composition-container-width-set.event';
export declare class SetCompositionContainerWidthCommandHandler extends CommandHandler<CompositionAggregate> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    handleAggregate(composition: CompositionAggregate, command: SetCompositionContainerWidthCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: CompositionContainerWidthSetEvent): void;
    private publishAggregateEvents;
}
