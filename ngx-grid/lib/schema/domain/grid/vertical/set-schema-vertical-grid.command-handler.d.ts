import { Type } from '@angular/core';
import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
import { SchemaAggregate } from '../../schema.aggregate';
export declare class SetSchemaVerticalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaVerticalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSchemaVerticalGridCommand>;
    publishDomainEvents(schemaAggregate: SchemaAggregate, command: Command): void;
    handleAggregate(schemaAggregate: SchemaAggregate, command: SetSchemaVerticalGridCommand): void;
}
