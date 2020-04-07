import { Type } from '@angular/core';
import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { SchemaAggregate } from '../schema.aggregate';
export declare class SetSchemaThemeCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaThemeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSchemaThemeCommand>;
    publishDomainEvents(aggregate: SchemaAggregate, command: Command): void;
    handleAggregate(schemaAggregate: SchemaAggregate, command: SetSchemaThemeCommand): void;
}
