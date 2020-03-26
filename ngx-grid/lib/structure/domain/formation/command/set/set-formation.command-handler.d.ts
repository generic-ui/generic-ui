import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetFormationCommand } from './set-formation.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SetFormationCommandHandler implements CommandHandler<StructureAggregate, SetFormationCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetFormationCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetFormationCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetFormationCommand): void;
}
