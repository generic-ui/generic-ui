import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetRowHeightCommand } from './set-row-height.command';
export declare class SetRowHeightCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetRowHeightCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
