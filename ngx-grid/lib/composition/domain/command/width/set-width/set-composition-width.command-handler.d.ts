import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class SetCompositionWidthCommandHandler extends CommandHandler<CompositionAggregate> {
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handleAggregate(composition: CompositionAggregate, command: SetCompositionWidthCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: SetCompositionWidthCommand): void;
}
