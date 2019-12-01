import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../structure-aggregate.repository';
import { StructureAggregateFactory } from '../structure.aggregate-factory';
import { InitStructureCommand } from './init-structure.command';
export declare class InitStructureCommandHandler extends CommandHandler {
    private readonly structureAggregateRepository;
    private readonly structureAggregateFactory;
    constructor(structureAggregateRepository: StructureAggregateRepository, structureAggregateFactory: StructureAggregateFactory, domainEventPublisher: DomainEventPublisher);
    handle(command: InitStructureCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
