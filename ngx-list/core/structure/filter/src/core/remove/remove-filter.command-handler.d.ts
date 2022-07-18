import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { RemoveFilterCommand } from './remove-filter.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class RemoveFilterCommandHandler implements CommandHandler<StructureAggregate, RemoveFilterCommand> {
    forCommand(): CommandType<RemoveFilterCommand>;
    handle(structure: StructureAggregate, command: RemoveFilterCommand): void;
}
