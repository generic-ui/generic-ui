import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { ToggleFilterCommand } from './toggle-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class ToggleFilterCommandHandler implements CommandHandler<StructureAggregate, ToggleFilterCommand> {
    private readonly structureAggregateRepository;
    private readonly domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ToggleFilterCommand>;
    handle(aggregate: StructureAggregate, command: ToggleFilterCommand): void;
    publish(aggregate: StructureAggregate, command: ToggleFilterCommand): void;
}
