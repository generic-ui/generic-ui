import { Observable } from 'rxjs';
import { SetPagingCommand } from 'structure/domain/paging/command/set/set-paging.command';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetPagingCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetPagingCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
