import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SelectAllUniqueFilterCommand } from './select-all-unique-filter.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class SelectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, SelectAllUniqueFilterCommand> {
    forCommand(): CommandType<SelectAllUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: SelectAllUniqueFilterCommand): void;
}
