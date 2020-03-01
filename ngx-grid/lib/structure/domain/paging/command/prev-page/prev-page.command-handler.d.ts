import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { PrevPageCommand } from './prev-page.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class PrevPageCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: PrevPageCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
