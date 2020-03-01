import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetRowHeightCommand } from './set-row-height.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetRowHeightCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetRowHeightCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
