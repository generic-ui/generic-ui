import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { RemoveFilterCommand } from './remove-filter.command';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
export declare class RemoveFilterCommandHandler implements CommandHandler<StructureAggregate, RemoveFilterCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<RemoveFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: RemoveFilterCommand): void;
    handleAggregate(structure: StructureAggregate, command: RemoveFilterCommand): void;
}
