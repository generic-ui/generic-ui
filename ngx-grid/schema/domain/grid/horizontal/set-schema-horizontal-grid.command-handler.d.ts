import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
import { SchemaAggregate } from '../../schema.aggregate';
export declare class SetSchemaHorizontalGridCommandHandler implements CommandHandler<SchemaAggregate, SetSchemaHorizontalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSchemaHorizontalGridCommand>;
    publishDomainEvents(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
    handleAggregate(schemaAggregate: SchemaAggregate, command: SetSchemaHorizontalGridCommand): void;
}
