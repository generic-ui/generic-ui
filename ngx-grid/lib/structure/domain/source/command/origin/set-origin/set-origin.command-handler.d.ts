import { Type } from '@angular/core';
import { CommandHandler } from '@generic-ui/hermes';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
import { SetOriginCommand } from './set-origin.command';
export declare class SetOriginCommandHandler implements CommandHandler<StructureAggregate, SetOriginCommand> {
    private structureSourceDomainEventPublisher;
    constructor(structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher);
    forCommand(): Type<SetOriginCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetOriginCommand): void;
    handleAggregate(structure: StructureAggregate, command: SetOriginCommand): void;
}
