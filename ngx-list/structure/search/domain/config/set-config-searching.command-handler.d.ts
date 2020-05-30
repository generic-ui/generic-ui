import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class SetConfigSearchingCommandHandler implements CommandHandler<StructureAggregate, SetConfigSearchingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetConfigSearchingCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SetConfigSearchingCommand): void;
}
