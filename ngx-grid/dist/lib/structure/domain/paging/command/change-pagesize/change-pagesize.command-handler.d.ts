import { Observable } from 'rxjs';
import { ChangePagesizeCommand } from 'structure/domain/paging/command/change-pagesize/change-pagesize.command';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { CommandHandler, ExecuteResponse, EventDispatcher } from 'generic-ui-cqrs';
export declare class ChangePagesizeCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: ChangePagesizeCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
