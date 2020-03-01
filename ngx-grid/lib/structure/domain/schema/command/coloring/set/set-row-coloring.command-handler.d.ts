import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { SetRowColoringCommand } from './set-row-coloring.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class SetRowColoringCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetRowColoringCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
