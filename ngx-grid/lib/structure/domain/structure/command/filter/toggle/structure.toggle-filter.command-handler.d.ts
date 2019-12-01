import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureToggleFilterCommand } from './structure.toggle-filter.command';
export declare class StructureToggleFilterCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: StructureToggleFilterCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
