import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../../lib/structure/domain/structure/structure-aggregate.repository';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
import { StructureAggregate } from '../../../../../lib/structure/domain/structure/structure.aggregate';
export declare class ToggleSelectedRowCommandHandler implements CommandHandler<StructureAggregate, ToggleSelectedRowCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<ToggleSelectedRowCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
}
