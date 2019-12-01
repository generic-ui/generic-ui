import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CompositionEventConverter } from '../composition-event.converter';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
export declare class CompositionChangeSortStatusCommandHandler extends CommandHandler {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    handle(command: CompositionChangeSortStatusCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
