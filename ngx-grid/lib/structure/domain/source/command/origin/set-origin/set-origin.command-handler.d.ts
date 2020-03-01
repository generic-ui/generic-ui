import { Observable } from 'rxjs';
import { CommandHandler, ExecuteResponse } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
import { SetOriginCommand } from './set-origin.command';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class SetOriginCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    private structureSourceDomainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher);
    handle(command: SetOriginCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
