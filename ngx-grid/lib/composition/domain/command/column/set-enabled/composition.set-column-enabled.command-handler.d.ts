import { Type } from '@angular/core';
import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { CompositionAggregate } from '../../composition.aggregate';
import { CompositionSetColumnEnabledCommand } from './composition.set-column-enabled.command';
export declare class CompositionSetColumnEnabledCommandHandler implements CommandHandler<CompositionAggregate, CompositionSetColumnEnabledCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    private readonly compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): Type<CompositionSetColumnEnabledCommand>;
    handleAggregate(aggregate: CompositionAggregate, command: CompositionSetColumnEnabledCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: Command): void;
    private publishEvents;
}
