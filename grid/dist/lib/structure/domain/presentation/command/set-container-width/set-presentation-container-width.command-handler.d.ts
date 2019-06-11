import { Observable } from 'rxjs';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { ColumnConverter } from 'structure/domain/presentation/command/column/column.converter';
import { SetPresentationContainerWidthCommand } from 'structure/domain/presentation/command/set-container-width/set-presentation-container-width.command';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class SetPresentationContainerWidthCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private readonly columnConverter;
    constructor(structureAggregateRepository: StructureAggregateRepository, columnConverter: ColumnConverter, eventDispatcher: EventDispatcher);
    execute(command: SetPresentationContainerWidthCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
