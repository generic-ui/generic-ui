import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { UnselectAllUniqueFilterCommand } from './unselect-all-unique-filter.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class UnselectAllUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectAllUniqueFilterCommand> {
    forCommand(): CommandType<UnselectAllUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: UnselectAllUniqueFilterCommand): void;
}
