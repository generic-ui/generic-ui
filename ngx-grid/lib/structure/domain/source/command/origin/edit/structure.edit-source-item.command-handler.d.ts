import { Observable } from 'rxjs';
import { CommandHandler, DomainEventPublisher, ExecuteResponse } from '@generic-ui/hermes';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { StructureAggregateRepository } from '../../../../structure/command/structure-aggregate.repository';
import { StructureSourceDomainEventPublisher } from '../../structure.source.domain-event.publisher';
import { StructureAggregate } from '../../../../structure/command/structure.aggregate';
export declare class StructureEditSourceItemCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    private domainEventPublisher;
    private structureSourceDomainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher, structureSourceDomainEventPublisher: StructureSourceDomainEventPublisher);
    handle(command: StructureEditSourceItemCommand): ExecuteResponse | Observable<ExecuteResponse>;
}
