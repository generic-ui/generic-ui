import { Observable } from 'rxjs';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
import { SetRowColoringCommand } from 'structure/domain/schema/command/coloring/set/set-row-coloring.command';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
export declare class SetRowColoringCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetRowColoringCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
