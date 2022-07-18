import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { UnselectAllRowsCommand } from './unselect-all-rows.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class UnselectAllRowsCommandHandler implements CommandHandler<StructureAggregate, UnselectAllRowsCommand> {
    forCommand(): CommandType<UnselectAllRowsCommand>;
    handle(aggregate: StructureAggregate, command: UnselectAllRowsCommand): void;
}
