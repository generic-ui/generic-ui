import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregate } from '../../../../../core/domain/structure.aggregate';
import { DeleteOriginItemCommand } from './delete-origin-item.command';
export declare class DeleteOriginItemCommandHandler implements CommandHandler<StructureAggregate, DeleteOriginItemCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<DeleteOriginItemCommand>;
    publish(aggregate: StructureAggregate, command: DeleteOriginItemCommand): void;
    handle(aggregate: StructureAggregate, command: DeleteOriginItemCommand): void;
}
