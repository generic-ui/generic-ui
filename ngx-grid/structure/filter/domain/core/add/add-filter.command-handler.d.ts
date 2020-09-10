import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class AddFilterCommandHandler implements CommandHandler<StructureAggregate, AddFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<AddFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: AddFilterCommand): void;
    handleAggregate(structure: StructureAggregate, command: AddFilterCommand): void;
}
