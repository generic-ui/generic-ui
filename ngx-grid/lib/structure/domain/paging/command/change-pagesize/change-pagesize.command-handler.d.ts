import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { ChangePagesizeCommand } from './change-pagesize.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class ChangePagesizeCommandHandler extends CommandHandler<StructureAggregate> {
    private structureAggregateRepository;
    protected domainEventPublisher: DomainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    handleAggregate(structureAggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: ChangePagesizeCommand): void;
    private publishAggregateEvents;
    private publishAggregateEvent;
}
