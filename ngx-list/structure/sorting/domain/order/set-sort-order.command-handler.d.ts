import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../lib/structure/domain/structure/structure-aggregate.repository';
import { SetSortOrderCommand } from './set-sort-order.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetSortOrderCommandHandler implements CommandHandler<StructureAggregate, SetSortOrderCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSortOrderCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetSortOrderCommand): void;
    handleAggregate(structure: StructureAggregate, command: SetSortOrderCommand): void;
    private publishSortEvent;
}
