import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SelectUniqueFilterCommand } from './select-unique-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class SelectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, SelectUniqueFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SelectUniqueFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SelectUniqueFilterCommand): void;
    handleAggregate(structure: StructureAggregate, command: SelectUniqueFilterCommand): void;
}
