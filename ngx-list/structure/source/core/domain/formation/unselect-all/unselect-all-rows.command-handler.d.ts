import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../../core/domain/structure-aggregate.repository';
import { UnselectAllRowsCommand } from './unselect-all-rows.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class UnselectAllRowsCommandHandler implements CommandHandler<StructureAggregate, UnselectAllRowsCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<UnselectAllRowsCommand>;
    publish(aggregate: StructureAggregate, command: UnselectAllRowsCommand): void;
    handle(aggregate: StructureAggregate, command: UnselectAllRowsCommand): void;
}
