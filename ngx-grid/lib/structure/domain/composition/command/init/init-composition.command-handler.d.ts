import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CompositionAggregateFactory } from '../composition.aggregate-factory';
import { InitCompositionCommand } from './init-composition.command';
export declare class InitCompositionCommandHandler extends CommandHandler {
    private readonly compositionAggregateRepository;
    private readonly compositionAggregateFactory;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, compositionAggregateFactory: CompositionAggregateFactory, domainEventPublisher: DomainEventPublisher);
    handle(command: InitCompositionCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
