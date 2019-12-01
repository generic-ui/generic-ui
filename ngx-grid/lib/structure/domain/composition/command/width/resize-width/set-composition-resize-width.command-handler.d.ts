import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
export declare class SetCompositionResizeWidthCommandHandler extends CommandHandler {
    private readonly compositionAggregateRepository;
    private readonly columnConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, columnConverter: ColumnEntityFactory, domainEventPublisher: DomainEventPublisher);
    handle(command: SetCompositionResizeWidthCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
