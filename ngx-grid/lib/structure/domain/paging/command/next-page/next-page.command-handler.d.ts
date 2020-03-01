import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { NextPageCommand } from './next-page.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class NextPageCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: NextPageCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
