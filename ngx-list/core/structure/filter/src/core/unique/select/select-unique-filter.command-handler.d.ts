import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SelectUniqueFilterCommand } from './select-unique-filter.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class SelectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, SelectUniqueFilterCommand> {
    forCommand(): CommandType<SelectUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: SelectUniqueFilterCommand): void;
}
