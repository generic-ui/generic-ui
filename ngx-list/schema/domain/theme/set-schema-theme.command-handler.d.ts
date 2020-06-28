import { Command, CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { SchemaAggregate } from '../schema.aggregate';
export declare class SetSchemaThemeCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaThemeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetSchemaThemeCommand>;
    publishDomainEvents(aggregate: SchemaAggregate, command: Command): void;
    handleAggregate(schemaAggregate: SchemaAggregate, command: SetSchemaThemeCommand): void;
}
