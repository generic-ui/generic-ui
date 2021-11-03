import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
import { SchemaAggregate } from '../../schema.aggregate';
export declare class SetSchemaVerticalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaVerticalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSchemaVerticalGridCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaVerticalGridCommand): void;
    publish(schemaAggregate: SchemaAggregate, command: SetSchemaVerticalGridCommand): void;
}
