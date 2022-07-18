import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class ToggleSelectedRowCommandHandler implements CommandHandler<StructureAggregate, ToggleSelectedRowCommand> {
    forCommand(): CommandType<ToggleSelectedRowCommand>;
    handle(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
}
