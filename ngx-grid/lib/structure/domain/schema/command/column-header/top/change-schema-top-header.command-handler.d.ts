import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { ChangeSchemaTopHeaderCommand } from './change-schema-top-header.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class ChangeSchemaTopHeaderCommandHandler implements CommandHandler<StructureAggregate, ChangeSchemaTopHeaderCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<ChangeSchemaTopHeaderCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: ChangeSchemaTopHeaderCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: ChangeSchemaTopHeaderCommand): void;
}
