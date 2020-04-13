import { AggregateRepository, Command, CreateAggregateCommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { CreateStructureCommand } from './create-structure.command';
import { StructureAggregate } from '../structure.aggregate';
import { StructureId } from '../../structure.id';
export declare class CreateStructureCommandHandler implements CreateAggregateCommandHandler<StructureAggregate, CreateStructureCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    getAggregateRepository(): AggregateRepository<StructureId, StructureAggregate>;
    forCommand(): Command | any;
    publishDomainEvents(aggregate: StructureAggregate, command: CreateStructureCommand): void;
}
