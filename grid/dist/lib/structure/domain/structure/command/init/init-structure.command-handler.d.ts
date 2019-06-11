import { Observable } from 'rxjs';
import { InitStructureCommand } from 'structure/domain/structure/command/init/init-structure.command';
import { StructureAggregateRepository } from 'structure/domain/structure/command/structure-aggregate.repository';
import { StructureAggregateFactory } from 'structure/domain/structure/command/structure.aggregate-factory';
import { CommandHandler, EventDispatcher, ExecuteResponse } from 'generic-ui-cqrs';
export declare class InitStructureCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private readonly structureAggregateFactory;
    constructor(structureAggregateRepository: StructureAggregateRepository, structureAggregateFactory: StructureAggregateFactory, eventDispatcher: EventDispatcher);
    execute(command: InitStructureCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
