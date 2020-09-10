import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { UnselectAllUniqueFilterCommand } from './unselect-all-unique-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class UnselectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectAllUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<UnselectAllUniqueFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: UnselectAllUniqueFilterCommand): void;
    handleAggregate(structure: StructureAggregate, command: UnselectAllUniqueFilterCommand): void;
}
