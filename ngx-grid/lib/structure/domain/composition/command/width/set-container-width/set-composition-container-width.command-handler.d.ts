import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../composition.aggregate-repository';
import { CompositionEventConverter } from '../../composition-event.converter';
import { SetCompositionContainerWidthCommand } from './set-composition-container-width.command';
export declare class SetCompositionContainerWidthCommandHandler extends CommandHandler {
    private readonly compositionAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    private compositionEventConverter;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher, compositionEventConverter: CompositionEventConverter);
    handle(command: SetCompositionContainerWidthCommand): ExecuteResponse | Observable<ExecuteResponse>;
    private publishAggregateEvents;
}
