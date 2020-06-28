import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../../lib/structure/domain/structure/structure-aggregate.repository';
import { SelectAllRowsCommand } from './select-all-rows.command';
import { StructureAggregate } from '../../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SelectAllRowsCommandHandler implements CommandHandler<StructureAggregate, SelectAllRowsCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SelectAllRowsCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SelectAllRowsCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SelectAllRowsCommand): void;
}
