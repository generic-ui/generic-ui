import { AggregateRepository, CommandType, CreateAggregateCommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { CreateStructureCommand } from './create-structure.command';
import { StructureAggregate } from '../structure.aggregate';
import { StructureId } from '../../structure.id';
export declare class CreateStructureCommandHandler implements CreateAggregateCommandHandler<StructureAggregate, CreateStructureCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<CreateStructureCommand> | any;
    getAggregateRepository(): AggregateRepository<StructureId, StructureAggregate>;
    publishDomainEvents(aggregate: StructureAggregate, command: CreateStructureCommand): void;
}
