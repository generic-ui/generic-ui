import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../lib/structure/domain/structure/structure-aggregate.repository';
import { ToggleSortCommand } from './toggle-sort.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class ToggleSortCommandHandler implements CommandHandler<StructureAggregate, ToggleSortCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<ToggleSortCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: ToggleSortCommand): void;
    handleAggregate(structure: StructureAggregate, command: ToggleSortCommand): void;
    private publishSortEvent;
}
