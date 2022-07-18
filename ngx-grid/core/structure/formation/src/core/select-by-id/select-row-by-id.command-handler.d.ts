import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SelectRowByIdCommand } from './select-row-by-id.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SelectRowByIdCommandHandler implements CommandHandler<StructureAggregate, SelectRowByIdCommand> {
    forCommand(): CommandType<SelectRowByIdCommand>;
    handle(aggregate: StructureAggregate, command: SelectRowByIdCommand): void;
}
