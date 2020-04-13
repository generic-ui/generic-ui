import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSourceDomainEventPublisher } from '../../../source/structure.source.domain-event.publisher';
import { StructureSetSummariesEnabledCommand } from './structure.set-summaries-enabled.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetSummariesEnabledCommandHandler implements CommandHandler<StructureAggregate, StructureSetSummariesEnabledCommand> {
    private readonly structureSourceDomainEventPublisher;
    private domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureSetSummariesEnabledCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureSetSummariesEnabledCommand): void;
    handleAggregate(structure: StructureAggregate, command: StructureSetSummariesEnabledCommand): void;
}
