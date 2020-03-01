import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SourceSetLoadingCommand } from './source-set-loading.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SourceSetLoadingCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SourceSetLoadingCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
