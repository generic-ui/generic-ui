import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { ColumnConverter } from 'structure/domain/presentation/command/column/column.converter';
import { SetPresentationWidthCommand } from 'structure/domain/presentation/command/set-width/set-presentation-width.command';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetPresentationWidthCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private readonly columnConverter;
    constructor(structureAggregateRepository: StructureAggregateRepository, columnConverter: ColumnConverter, eventDispatcher: EventDispatcher);
    execute(command: SetPresentationWidthCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
