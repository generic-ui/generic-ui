import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetConfigFilterCommand } from './structure.set-config-filter.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetConfigFilterCommandHandler implements CommandHandler<StructureAggregate, StructureSetConfigFilterCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureSetConfigFilterCommand>;
    handleAggregate(aggregate: StructureAggregate, command: StructureSetConfigFilterCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureSetConfigFilterCommand): void;
}
