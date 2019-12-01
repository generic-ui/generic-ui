import { Observable } from 'rxjs';
import { CommandHandler } from '@generic-ui/hermes';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { ChangeSchemaTopHeaderCommand } from './change-schema-top-header.command';
export declare class ChangeSchemaTopHeaderCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: ChangeSchemaTopHeaderCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
