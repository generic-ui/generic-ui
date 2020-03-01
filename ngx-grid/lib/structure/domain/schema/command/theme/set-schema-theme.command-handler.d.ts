import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetSchemaThemeCommand } from './set-schema-theme.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SetSchemaThemeCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handle(command: SetSchemaThemeCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
