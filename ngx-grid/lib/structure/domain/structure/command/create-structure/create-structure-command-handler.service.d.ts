import { AggregateCommandHandler, AggregateRepository, Command, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { CreateStructureCommand } from './create-structure.command';
import { StructureAggregate } from '../structure.aggregate';
export declare class CreateStructureCommandHandler implements AggregateCommandHandler<StructureAggregate, CreateStructureCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    getAggregateRepository(): AggregateRepository<StructureAggregate>;
    forCommand(): Command | any;
    publishDomainEvents(aggregate: StructureAggregate, command: CreateStructureCommand): void;
}
