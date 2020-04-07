import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class CompositionChangeSortStatusCommandHandler implements CommandHandler<CompositionAggregate, CompositionChangeSortStatusCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<CompositionChangeSortStatusCommand>;
    publishDomainEvents(composition: CompositionAggregate, command: CompositionChangeSortStatusCommand): void;
    handleAggregate(composition: CompositionAggregate, command: CompositionChangeSortStatusCommand): void;
}
