import { Type } from '@angular/core';
import { CommandHandler } from '@generic-ui/hermes';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
import { StructureAggregate } from '../../../structure/structure.aggregate';
export declare class StructureEditSourceItemCommandHandler implements CommandHandler<StructureAggregate, StructureEditSourceItemCommand> {
    private structureSourceDomainEventPublisher;
    constructor(structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher);
    forCommand(): Type<StructureEditSourceItemCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureEditSourceItemCommand): void;
    handleAggregate(structure: StructureAggregate, command: StructureEditSourceItemCommand): void;
}
