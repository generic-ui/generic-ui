import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { SetColumnsCommand } from 'structure/domain/presentation/command/set-columns/set-columns.command';
import { EventDispatcher, CommandHandler, ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetColumnsCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetColumnsCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
