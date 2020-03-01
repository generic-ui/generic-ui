import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { SetScrollPositionCommand } from './set-scroll-position.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetScrollPositionCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetScrollPositionCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
