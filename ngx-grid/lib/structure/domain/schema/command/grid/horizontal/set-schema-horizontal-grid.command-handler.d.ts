import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class SetSchemaHorizontalGridCommandHandler implements CommandHandler<StructureAggregate, SetSchemaHorizontalGridCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSchemaHorizontalGridCommand>;
    handleAggregate(aggregate: StructureAggregate, command: SetSchemaHorizontalGridCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSchemaHorizontalGridCommand): void;
}
