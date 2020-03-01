import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure-aggregate.repository';
import { StructureSetConfigSearchingCommand } from './structure.set-config-searching.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class StructureSetConfigSearchingCommandHandler extends CommandHandler<StructureAggregate> {
    private readonly structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: StructureSetConfigSearchingCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
