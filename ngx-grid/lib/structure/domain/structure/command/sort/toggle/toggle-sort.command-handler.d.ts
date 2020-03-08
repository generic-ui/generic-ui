import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { ToggleSortCommand } from './toggle-sort.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class ToggleSortCommandHandler implements CommandHandler<StructureAggregate, ToggleSortCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<ToggleSortCommand>;
    handleAggregate(structure: StructureAggregate, command: ToggleSortCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: ToggleSortCommand): void;
    private publishSortEvent;
}
