import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { SetSchemaVerticalGridCommand } from 'structure/domain/schema/command/grid/vertical/set-schema-vertical-grid.command';
import { CommandHandler } from 'generic-ui-cqrs';
import { EventDispatcher } from 'generic-ui-cqrs';
import { ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetSchemaVerticalGridCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetSchemaVerticalGridCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
