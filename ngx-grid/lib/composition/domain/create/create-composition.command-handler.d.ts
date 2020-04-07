import { Type } from '@angular/core';
import { AggregateCommandHandler, AggregateRepository, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CreateCompositionCommand } from './create-composition.command';
import { CompositionAggregate } from '../composition.aggregate';
import { CompositionId } from '../composition.id';
export declare class CreateCompositionCommandHandler implements AggregateCommandHandler<CompositionAggregate, CreateCompositionCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    getAggregateRepository(): AggregateRepository<CompositionId, CompositionAggregate>;
    forCommand(): Type<CreateCompositionCommand>;
    publishDomainEvents(aggregate: CompositionAggregate, command: CreateCompositionCommand): void;
}
