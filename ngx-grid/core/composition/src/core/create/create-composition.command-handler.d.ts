import { CommandType, CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateCompositionCommand } from './create-composition.command';
export declare class CreateCompositionCommandHandler implements CreateAggregateCommandHandler<CreateCompositionCommand> {
    forCommand(): CommandType<CreateCompositionCommand>;
}
