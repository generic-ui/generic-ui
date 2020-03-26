import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSchemaCommand } from './set-schema.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SetSchemaCommandHandler implements CommandHandler<StructureAggregate, SetSchemaCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSchemaCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSchemaCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetSchemaCommand): void;
}
