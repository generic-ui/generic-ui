import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSetHeightCommand } from './structure-set-height.command';
import { StructureAggregate } from '../../../structure.aggregate';
export declare class StructureSetHeightCommandHandler implements CommandHandler<StructureAggregate, StructureSetHeightCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureSetHeightCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: StructureSetHeightCommand): void;
}
