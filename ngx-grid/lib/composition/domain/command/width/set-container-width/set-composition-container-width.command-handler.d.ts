import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class SetCompositionContainerWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionContainerWidthCommand> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): Type<SetCompositionContainerWidthCommand>;
    publishDomainEvents(aggregate: CompositionAggregate, command: SetCompositionContainerWidthCommand): void;
    handleAggregate(composition: CompositionAggregate, command: SetCompositionContainerWidthCommand): void;
    private publishAggregateEvents;
}
