import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSelectionTypeCommand } from './set-selection-type.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetSelectionTypeCommandHandler implements CommandHandler<StructureAggregate, SetSelectionTypeCommand> {
    forCommand(): CommandType<SetSelectionTypeCommand>;
    handle(aggregate: StructureAggregate, command: SetSelectionTypeCommand): void;
}
