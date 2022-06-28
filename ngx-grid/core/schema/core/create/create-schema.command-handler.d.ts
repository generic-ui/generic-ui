import { CommandType, CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateSchemaCommand } from './create-schema.command';
export declare class CreateSchemaCommandHandler implements CreateAggregateCommandHandler<CreateSchemaCommand> {
    forCommand(): CommandType<CreateSchemaCommand>;
}
