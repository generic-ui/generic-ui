import { Observable } from 'rxjs';
import { CommandHandler } from '@generic-ui/hermes';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
export declare class SetSchemaThemeCommandHandler extends CommandHandler {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetSchemaThemeCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
