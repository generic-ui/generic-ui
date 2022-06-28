import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
import { SchemaAggregate } from '../../../domain/schema.aggregate';
export declare class SetSchemaHorizontalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaHorizontalGridCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetSchemaHorizontalGridCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
    publish(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
}
