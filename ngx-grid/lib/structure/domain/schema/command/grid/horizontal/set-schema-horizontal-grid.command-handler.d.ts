import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { SetSchemaHorizontalGridCommand } from './set-schema-horizontal-grid.command';
export declare class SetSchemaHorizontalGridCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetSchemaHorizontalGridCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
