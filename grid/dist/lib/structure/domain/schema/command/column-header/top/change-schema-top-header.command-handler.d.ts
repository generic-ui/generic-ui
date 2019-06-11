import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { ChangeSchemaTopHeaderCommand } from 'structure/domain/schema/command/column-header/top/change-schema-top-header.command';
import { CommandHandler } from 'generic-ui-cqrs';
import { EventDispatcher } from 'generic-ui-cqrs';
import { ExecuteResponse } from 'generic-ui-cqrs';
export declare class ChangeSchemaTopHeaderCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: ChangeSchemaTopHeaderCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
