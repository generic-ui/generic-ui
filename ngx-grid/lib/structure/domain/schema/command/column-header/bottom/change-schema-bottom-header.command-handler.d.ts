import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { ChangeSchemaBottomHeaderCommand } from './change-schema-bottom-header.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class ChangeSchemaBottomHeaderCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: ChangeSchemaBottomHeaderCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
