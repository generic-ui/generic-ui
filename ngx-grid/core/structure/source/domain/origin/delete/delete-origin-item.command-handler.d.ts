import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import { DeleteOriginItemCommand } from './delete-origin-item.command';
export declare class DeleteOriginItemCommandHandler implements CommandHandler<StructureAggregate, DeleteOriginItemCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<DeleteOriginItemCommand>;
    handle(aggregate: StructureAggregate, command: DeleteOriginItemCommand): void;
    publish(aggregate: StructureAggregate, command: DeleteOriginItemCommand): void;
}
