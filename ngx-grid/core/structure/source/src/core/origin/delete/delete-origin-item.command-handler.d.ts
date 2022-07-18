import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
import { DeleteOriginItemCommand } from './delete-origin-item.command';
export declare class DeleteOriginItemCommandHandler implements CommandHandler<StructureAggregate, DeleteOriginItemCommand> {
    forCommand(): CommandType<DeleteOriginItemCommand>;
    handle(aggregate: StructureAggregate, command: DeleteOriginItemCommand): void;
}
