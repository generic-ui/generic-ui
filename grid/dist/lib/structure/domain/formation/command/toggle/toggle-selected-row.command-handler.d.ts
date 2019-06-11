import { Observable } from 'rxjs';
import { ToggleSelectedRowCommand } from 'structure/domain/formation/command/toggle/toggle-selected-row.command';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class ToggleSelectedRowCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: ToggleSelectedRowCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
