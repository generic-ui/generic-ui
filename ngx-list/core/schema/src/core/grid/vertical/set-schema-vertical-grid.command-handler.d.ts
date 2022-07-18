import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
import { SchemaAggregate } from '../../../domain/schema.aggregate';
export declare class SetSchemaVerticalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaVerticalGridCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<SetSchemaVerticalGridCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaVerticalGridCommand): void;
    publish(schemaAggregate: SchemaAggregate, command: SetSchemaVerticalGridCommand): void;
}
