import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SelectAllRowsCommand } from './select-all-rows.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SelectAllRowsCommandHandler implements CommandHandler<StructureAggregate, SelectAllRowsCommand> {
    forCommand(): CommandType<SelectAllRowsCommand>;
    handle(aggregate: StructureAggregate, command: SelectAllRowsCommand): void;
}
