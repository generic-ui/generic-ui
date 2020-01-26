import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../../composition-event.converter';
import { CompositionMoveLeftColumnCommand } from './composition.move-left-column.command';
export declare class CompositionMoveLeftColumnCommandHandler extends CommandHandler {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    handle(command: CompositionMoveLeftColumnCommand): ExecuteResponse | Observable<ExecuteResponse>;
    private publishEvents;
}
