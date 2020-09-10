import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class ToggleSelectedRowCommandHandler implements CommandHandler<StructureAggregate, ToggleSelectedRowCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ToggleSelectedRowCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
}
