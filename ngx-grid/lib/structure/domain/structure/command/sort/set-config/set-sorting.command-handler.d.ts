import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetSortingCommand } from './set-sorting.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetSortingCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetSortingCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
