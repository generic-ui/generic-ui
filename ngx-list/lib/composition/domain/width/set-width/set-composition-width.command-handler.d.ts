import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { SetCompositionWidthCommand } from './set-composition-width.command';
import { CompositionAggregate } from '../../composition.aggregate';
export declare class SetCompositionWidthCommandHandler implements CommandHandler<CompositionAggregate, SetCompositionWidthCommand> {
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetCompositionWidthCommand>;
    publishDomainEvents(aggregate: CompositionAggregate, command: SetCompositionWidthCommand): void;
    handleAggregate(composition: CompositionAggregate, command: SetCompositionWidthCommand): void;
}
