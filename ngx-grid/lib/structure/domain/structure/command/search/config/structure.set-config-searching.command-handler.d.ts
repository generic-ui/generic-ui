import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetConfigSearchingCommand } from './structure.set-config-searching.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetConfigSearchingCommandHandler implements CommandHandler<StructureAggregate, StructureSetConfigSearchingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureSetConfigSearchingCommand>;
    handleAggregate(aggregate: StructureAggregate, command: StructureSetConfigSearchingCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureSetConfigSearchingCommand): void;
}
