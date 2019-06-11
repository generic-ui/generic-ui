import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { ChangeSchemaBottomHeaderCommand } from 'structure/domain/schema/command/column-header/bottom/change-schema-bottom-header.command';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class ChangeSchemaBottomHeaderCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: ChangeSchemaBottomHeaderCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
