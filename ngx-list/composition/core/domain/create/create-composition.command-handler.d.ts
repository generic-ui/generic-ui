import { AggregateRepository, CommandType, CreateAggregateCommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CreateCompositionCommand } from './create-composition.command';
import { CompositionAggregate } from '../composition.aggregate';
import { CompositionId } from '../composition.id';
export declare class CreateCompositionCommandHandler implements CreateAggregateCommandHandler<CompositionAggregate, CreateCompositionCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<CreateCompositionCommand>;
    getAggregateRepository(): AggregateRepository<CompositionId, CompositionAggregate>;
    publishDomainEvents(aggregate: CompositionAggregate, command: CreateCompositionCommand): void;
}
