import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { RemoveFilterCommand } from './remove-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class RemoveFilterCommandHandler implements CommandHandler<StructureAggregate, RemoveFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<RemoveFilterCommand>;
    handle(structure: StructureAggregate, command: RemoveFilterCommand): void;
    publish(aggregate: StructureAggregate, command: RemoveFilterCommand): void;
}
