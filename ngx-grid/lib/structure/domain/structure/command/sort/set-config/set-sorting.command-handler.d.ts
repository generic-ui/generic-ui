import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSortingCommand } from './set-sorting.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetSortingCommandHandler implements CommandHandler<StructureAggregate, SetSortingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSortingCommand>;
    handleAggregate(aggregate: StructureAggregate, command: SetSortingCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSortingCommand): void;
}
