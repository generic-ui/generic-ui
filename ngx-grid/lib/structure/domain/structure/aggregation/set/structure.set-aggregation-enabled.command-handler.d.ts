import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureSourceDomainEventPublisher } from '../../../source/structure.source.domain-event.publisher';
import { StructureSetAggregationEnabledCommand } from './structure.set-aggregation-enabled.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetAggregationEnabledCommandHandler implements CommandHandler<StructureAggregate, StructureSetAggregationEnabledCommand> {
    private readonly structureSourceDomainEventPublisher;
    private domainEventPublisher;
    constructor(structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<StructureSetAggregationEnabledCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: StructureSetAggregationEnabledCommand): void;
    handleAggregate(structure: StructureAggregate, command: StructureSetAggregationEnabledCommand): void;
}
