import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetScrollBarPositionCommand } from './set-scroll-bar-position.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class SetScrollBarPositionCommandHandler implements CommandHandler<StructureAggregate, SetScrollBarPositionCommand> {
    forCommand(): CommandType<SetScrollBarPositionCommand>;
    handle(structure: StructureAggregate, command: SetScrollBarPositionCommand): void;
}
