import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { SetSchemaThemeCommand } from 'structure/domain/schema/command/theme/set-schema-theme.command';
import { CommandHandler } from 'generic-ui-cqrs';
import { EventDispatcher } from 'generic-ui-cqrs';
import { ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetSchemaThemeCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, eventDispatcher: EventDispatcher);
    execute(command: SetSchemaThemeCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
