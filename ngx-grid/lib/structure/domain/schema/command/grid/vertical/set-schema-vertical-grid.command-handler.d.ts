import { Type } from '@angular/core';
import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class SetSchemaVerticalGridCommandHandler implements CommandHandler<StructureAggregate, SetSchemaVerticalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSchemaVerticalGridCommand>;
    handleAggregate(aggregate: StructureAggregate, command: SetSchemaVerticalGridCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: Command): void;
}
