import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetConfigFilterCommand } from './structure.set-config-filter.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetConfigFilterCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: StructureSetConfigFilterCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
