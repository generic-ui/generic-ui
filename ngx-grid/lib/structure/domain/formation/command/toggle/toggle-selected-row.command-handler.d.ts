import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class ToggleSelectedRowCommandHandler implements CommandHandler<StructureAggregate, ToggleSelectedRowCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<ToggleSelectedRowCommand>;
    handleAggregate(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: ToggleSelectedRowCommand): void;
}
