import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CompositionAggregateFactory } from '../composition.aggregate-factory';
import { InitCompositionCommand } from './init-composition.command';
import { CompositionAggregate } from '../composition.aggregate';
export declare class InitCompositionCommandHandler extends CommandHandler<CompositionAggregate> {
    private readonly compositionAggregateRepository;
    private readonly compositionAggregateFactory;
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, compositionAggregateFactory: CompositionAggregateFactory, domainEventPublisher: DomainEventPublisher);
    handleEmptyAggregate(command: InitCompositionCommand): void;
    publishDomainEvents(aggregate: CompositionAggregate, command: InitCompositionCommand): void;
}
