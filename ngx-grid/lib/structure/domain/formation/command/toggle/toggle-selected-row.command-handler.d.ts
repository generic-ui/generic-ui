import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { ToggleSelectedRowCommand } from './toggle-selected-row.command';
export declare class ToggleSelectedRowCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: ToggleSelectedRowCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
