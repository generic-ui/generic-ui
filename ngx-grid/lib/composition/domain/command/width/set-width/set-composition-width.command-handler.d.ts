import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { ColumnEntityFactory } from '../../column/column-entity.factory';
import { SetCompositionWidthCommand } from './set-composition-width.command';
export declare class SetCompositionWidthCommandHandler extends CommandHandler {
    private readonly compositionAggregateRepository;
    private readonly columnConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, columnConverter: ColumnEntityFactory, domainEventPublisher: DomainEventPublisher);
    handle(command: SetCompositionWidthCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
