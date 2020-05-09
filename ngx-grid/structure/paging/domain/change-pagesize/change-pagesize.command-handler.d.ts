import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class ChangePagesizeCommandHandler implements CommandHandler<StructureAggregate, ChangePagesizeCommand> {
    protected domainEventPublisher: DomainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<ChangePagesizeCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    handleAggregate(structureAggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    private publishAggregateEvents;
    private publishAggregateEvent;
}
