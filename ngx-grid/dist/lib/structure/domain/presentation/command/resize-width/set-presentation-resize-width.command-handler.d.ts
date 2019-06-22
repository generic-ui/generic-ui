import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { ColumnConverter } from 'structure/domain/presentation/command/column/column.converter';
import { SetPresentationResizeWidthCommand } from 'structure/domain/presentation/command/resize-width/set-presentation-resize-width.command';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetPresentationResizeWidthCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private readonly columnConverter;
    constructor(structureAggregateRepository: StructureAggregateRepository, columnConverter: ColumnConverter, eventDispatcher: EventDispatcher);
    execute(command: SetPresentationResizeWidthCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
