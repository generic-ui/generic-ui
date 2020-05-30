import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSortingCommand } from './set-sorting.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetSortingCommandHandler implements CommandHandler<StructureAggregate, SetSortingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSortingCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSortingCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetSortingCommand): void;
}
