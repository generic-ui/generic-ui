import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../core/domain/structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SetSortOrderCommandHandler implements CommandHandler<StructureAggregate, SetSortOrderCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSortOrderCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSortOrderCommand): void;
    handleAggregate(structure: StructureAggregate, command: SetSortOrderCommand): void;
    private publishSortEvent;
}
