import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { SchemaAggregate } from '../../domain/schema.aggregate';
export declare class SetSchemaThemeCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaThemeCommand> {
    forCommand(): CommandType<SetSchemaThemeCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaThemeCommand): void;
}
