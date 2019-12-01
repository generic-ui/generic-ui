import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetVerticalScrollEnabledCommand } from './set-vertical-scroll-enabled.command';
export declare class SetVerticalScrollEnabledCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetVerticalScrollEnabledCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
