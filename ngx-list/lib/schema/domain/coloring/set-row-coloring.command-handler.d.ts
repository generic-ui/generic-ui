import { Type } from '@angular/core';
import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { SchemaAggregate } from '../schema.aggregate';
export declare class SetRowColoringCommandHandler implements CommandHandler<SchemaAggregate, SetRowColoringCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetRowColoringCommand>;
    publishDomainEvents(aggregate: SchemaAggregate, command: Command): void;
    handleAggregate(schemaAggregate: SchemaAggregate, command: SetRowColoringCommand): void;
}
