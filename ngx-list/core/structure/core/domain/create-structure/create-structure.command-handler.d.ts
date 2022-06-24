import { CommandType, CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateStructureCommand } from './create-structure.command';
export declare class CreateStructureCommandHandler implements CreateAggregateCommandHandler<CreateStructureCommand> {
    forCommand(): CommandType<CreateStructureCommand> | any;
}
