import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSelectionModeCommand } from './set-selection-mode.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetSelectionModeCommandHandler implements CommandHandler<StructureAggregate, SetSelectionModeCommand> {
    forCommand(): CommandType<SetSelectionModeCommand>;
    handle(aggregate: StructureAggregate, command: SetSelectionModeCommand): void;
}
