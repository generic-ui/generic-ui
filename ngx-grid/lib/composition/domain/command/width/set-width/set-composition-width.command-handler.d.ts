import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class SetCompositionWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionWidthCommand> {
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetCompositionWidthCommand>;
    handleAggregate(composition: CompositionAggregate, command: SetCompositionWidthCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: SetCompositionWidthCommand): void;
}
