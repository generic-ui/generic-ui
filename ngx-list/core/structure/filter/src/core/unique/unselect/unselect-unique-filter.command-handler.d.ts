import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { UnselectUniqueFilterCommand } from './unselect-unique-filter.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class UnselectUniqueFilterCommandHandler implements CommandHandler<StructureAggregate, UnselectUniqueFilterCommand> {
    forCommand(): CommandType<UnselectUniqueFilterCommand>;
    handle(structure: StructureAggregate, command: UnselectUniqueFilterCommand): void;
}
