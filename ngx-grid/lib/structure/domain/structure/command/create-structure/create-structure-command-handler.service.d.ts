import { AggregateRepository, Command, AggregateCommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { CreateStructureCommand } from './create-structure.command';
import { StructureAggregate } from '../structure.aggregate';
export declare class CreateStructureCommandHandler implements AggregateCommandHandler<StructureAggregate, CreateStructureCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    publishDomainEvents(aggregate: StructureAggregate, command: CreateStructureCommand): void;
    getAggregateRepository(): AggregateRepository<StructureAggregate>;
    forCommand(): Command | any;
}
