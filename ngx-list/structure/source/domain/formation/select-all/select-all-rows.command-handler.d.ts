import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { SelectAllRowsCommand } from './select-all-rows.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SelectAllRowsCommandHandler implements CommandHandler<StructureAggregate, SelectAllRowsCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SelectAllRowsCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SelectAllRowsCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SelectAllRowsCommand): void;
}
