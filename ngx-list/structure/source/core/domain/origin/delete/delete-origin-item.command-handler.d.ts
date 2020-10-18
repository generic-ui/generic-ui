import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import { DeleteOriginItemCommand } from './delete-origin-item.command';
export declare class DeleteOriginItemCommandHandler implements CommandHandler<StructureAggregate, DeleteOriginItemCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<DeleteOriginItemCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: DeleteOriginItemCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: DeleteOriginItemCommand): void;
}
