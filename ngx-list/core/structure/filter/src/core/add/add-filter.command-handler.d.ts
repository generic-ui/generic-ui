import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class AddFilterCommandHandler implements CommandHandler<StructureAggregate, AddFilterCommand> {
    forCommand(): CommandType<AddFilterCommand>;
    handle(structure: StructureAggregate, command: AddFilterCommand): void;
}
