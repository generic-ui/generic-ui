import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetEnabledSelectionCommand } from './set-enabled-selection.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetEnabledSelectionCommandHandler implements CommandHandler<StructureAggregate, SetEnabledSelectionCommand> {
    forCommand(): CommandType<SetEnabledSelectionCommand>;
    handle(aggregate: StructureAggregate, command: SetEnabledSelectionCommand): void;
}
