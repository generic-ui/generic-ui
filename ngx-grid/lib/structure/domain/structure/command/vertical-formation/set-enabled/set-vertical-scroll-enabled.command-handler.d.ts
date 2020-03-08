import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetVerticalScrollEnabledCommandHandler implements CommandHandler<StructureAggregate, SetVerticalScrollEnabledCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetVerticalScrollEnabledCommand>;
    handleAggregate(structure: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: SetVerticalScrollEnabledCommand): void;
}
