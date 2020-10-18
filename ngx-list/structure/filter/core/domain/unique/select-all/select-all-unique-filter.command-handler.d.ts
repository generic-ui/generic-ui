import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SelectAllUniqueFilterCommand } from './select-all-unique-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class SelectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, SelectAllUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SelectAllUniqueFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SelectAllUniqueFilterCommand): void;
    handleAggregate(structure: StructureAggregate, command: SelectAllUniqueFilterCommand): void;
}
