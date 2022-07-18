import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { SchemaAggregate } from '../../domain/schema.aggregate';
export declare class SetRowColoringCommandHandler implements CommandHandler<SchemaAggregate, SetRowColoringCommand> {
    forCommand(): CommandType<SetRowColoringCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetRowColoringCommand): void;
}
