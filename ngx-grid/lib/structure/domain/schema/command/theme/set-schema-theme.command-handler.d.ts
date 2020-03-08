import { Type } from '@angular/core';
import { Command, CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SetSchemaThemeCommandHandler implements CommandHandler<StructureAggregate, SetSchemaThemeCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetSchemaThemeCommand>;
    handleAggregate(structure: StructureAggregate, command: SetSchemaThemeCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: Command): void;
}
