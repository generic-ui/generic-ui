import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { PrevPageCommand } from './prev-page.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class PrevPageCommandHandler implements CommandHandler<StructureAggregate, PrevPageCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<PrevPageCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: PrevPageCommand): void;
    handleAggregate(structure: StructureAggregate, command: PrevPageCommand): void;
}
