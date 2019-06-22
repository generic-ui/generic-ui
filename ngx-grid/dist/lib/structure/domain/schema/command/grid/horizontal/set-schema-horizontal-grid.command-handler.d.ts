import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { SetSchemaHorizontalGridCommand } from 'structure/domain/schema/command/grid/horizontal/set-schema-horizontal-grid.command';
import { CommandHandler } from 'generic-ui-cqrs';
import { EventDispatcher } from 'generic-ui-cqrs';
import { ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetSchemaHorizontalGridCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetSchemaHorizontalGridCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
