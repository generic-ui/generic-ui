import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionChangeSortStatusCommand } from './composition-change-sort-status.command';
export declare class CompositionChangeSortStatusCommandHandler extends CommandHandler {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: CompositionChangeSortStatusCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
