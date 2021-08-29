import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class AddFilterCommandHandler implements CommandHandler<StructureAggregate, AddFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<AddFilterCommand>;
    handle(structure: StructureAggregate, command: AddFilterCommand): void;
    publish(aggregate: StructureAggregate, command: AddFilterCommand): void;
}
