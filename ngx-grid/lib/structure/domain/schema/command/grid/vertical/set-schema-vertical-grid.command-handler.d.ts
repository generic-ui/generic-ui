import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { SetSchemaVerticalGridCommand } from './set-schema-vertical-grid.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class SetSchemaVerticalGridCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetSchemaVerticalGridCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
