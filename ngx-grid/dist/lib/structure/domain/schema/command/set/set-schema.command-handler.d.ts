import { Observable } from 'rxjs';
import { SetSchemaCommand } from 'structure/domain/schema/command/set/set-schema.command';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetSchemaCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetSchemaCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
