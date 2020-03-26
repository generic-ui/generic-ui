import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { ChangeSchemaBottomHeaderCommand } from './change-schema-bottom-header.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class ChangeSchemaBottomHeaderCommandHandler implements CommandHandler<StructureAggregate, ChangeSchemaBottomHeaderCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<ChangeSchemaBottomHeaderCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: ChangeSchemaBottomHeaderCommand): void;
    handleAggregate(structure: StructureAggregate, command: ChangeSchemaBottomHeaderCommand): void;
}
