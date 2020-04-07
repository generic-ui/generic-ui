import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition.event-converter';
import { CompositionAggregate } from '../../../composition.aggregate';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
export declare class CompositionMoveLeftColumnCommandHandler implements CommandHandler<CompositionAggregate, CompositionMoveLeftColumnCommand> {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    forCommand(): Type<CompositionMoveLeftColumnCommand>;
    publishDomainEvents(aggregate: CompositionAggregate, command: CompositionMoveLeftColumnCommand): void;
    handleAggregate(aggregate: CompositionAggregate, command: CompositionMoveLeftColumnCommand): void;
    private publishEvents;
}
