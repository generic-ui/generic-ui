import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SelectRowByIndexCommand } from './select-row-by-index.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SelectRowByIndexCommandHandler implements CommandHandler<StructureAggregate, SelectRowByIndexCommand> {
    forCommand(): CommandType<SelectRowByIndexCommand>;
    handle(aggregate: StructureAggregate, command: SelectRowByIndexCommand): void;
}
