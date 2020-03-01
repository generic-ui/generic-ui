import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetConfigQuickFilterCommand } from './structure.set-config-quick-filter.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetConfigQuickFilterCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: StructureSetConfigQuickFilterCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
