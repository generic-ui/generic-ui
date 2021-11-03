import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
import { SchemaAggregate } from '../../schema.aggregate';
export declare class SetSchemaHorizontalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaHorizontalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSchemaHorizontalGridCommand>;
    handle(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
    publish(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
}
