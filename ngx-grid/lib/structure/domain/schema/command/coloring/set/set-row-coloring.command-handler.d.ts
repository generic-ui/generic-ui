import { Type } from '@angular/core';
import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class SetRowColoringCommandHandler implements CommandHandler<StructureAggregate, SetRowColoringCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetRowColoringCommand>;
    handleAggregate(structure: StructureAggregate, command: SetRowColoringCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: Command): void;
}
