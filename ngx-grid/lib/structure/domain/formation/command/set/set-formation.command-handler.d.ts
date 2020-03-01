import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetFormationCommand } from './set-formation.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SetFormationCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetFormationCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
