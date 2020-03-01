import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureAggregateFactory } from '../../structure.aggregate-factory';
import { StructureSourceDomainEventPublisher } from '../../../../source/command/structure.source.domain-event.publisher';
import { StructureSetAggregationEnabledCommand } from './structure.set-aggregation-enabled.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetAggregationEnabledCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    private readonly structureAggregateFactory;
    private readonly structureSourceDomainEventPublisher;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, structureAggregateFactory: StructureAggregateFactory, structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher, domainEventPublisher: DomainEventPublisher);
    handle(command: StructureSetAggregationEnabledCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
