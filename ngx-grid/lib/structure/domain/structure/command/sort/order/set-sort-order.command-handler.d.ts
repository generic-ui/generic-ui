import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetSortOrderCommandHandler implements CommandHandler<StructureAggregate, SetSortOrderCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSortOrderCommand>;
    handleAggregate(structure: StructureAggregate, command: SetSortOrderCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSortOrderCommand): void;
    private publishSortEvent;
}
