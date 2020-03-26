import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetConfigQuickFilterCommand } from './structure.set-config-quick-filter.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetConfigQuickFilterCommandHandler implements CommandHandler<StructureAggregate, StructureSetConfigQuickFilterCommand> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureSetConfigQuickFilterCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureSetConfigQuickFilterCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: StructureSetConfigQuickFilterCommand): void;
}
