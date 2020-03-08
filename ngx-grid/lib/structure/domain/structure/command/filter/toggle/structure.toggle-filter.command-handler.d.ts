import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureToggleFilterCommand } from './structure.toggle-filter.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureToggleFilterCommandHandler implements CommandHandler<StructureAggregate, StructureToggleFilterCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureToggleFilterCommand>;
    handleAggregate(aggregate: StructureAggregate, command: StructureToggleFilterCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureToggleFilterCommand): void;
}
