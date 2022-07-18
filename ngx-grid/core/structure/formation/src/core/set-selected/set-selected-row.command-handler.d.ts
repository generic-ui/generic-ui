import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSelectedRowCommand } from './set-selected-row.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetSelectedRowCommandHandler implements CommandHandler<StructureAggregate, SetSelectedRowCommand> {
    forCommand(): CommandType<SetSelectedRowCommand>;
    handle(aggregate: StructureAggregate, command: SetSelectedRowCommand): void;
}
