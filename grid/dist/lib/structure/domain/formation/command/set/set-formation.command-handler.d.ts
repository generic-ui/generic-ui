import { Observable } from 'rxjs';
import { SetFormationCommand } from 'structure/domain/formation/command/set/set-formation.command';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetFormationCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetFormationCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
